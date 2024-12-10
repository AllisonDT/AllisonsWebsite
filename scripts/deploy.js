const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const buildDir = path.join(__dirname, "../build");
const rootDir = path.join(__dirname, "..");

(async function deploy() {
  try {
    console.log("Starting the deployment process...");

    // Build the project
    console.log("Building the app...");
    execSync("npm run build", { stdio: "inherit" });

    // Confirm build directory exists
    if (!(await fs.pathExists(buildDir))) {
      throw new Error(`Build directory does not exist: ${buildDir}`);
    }

    console.log("Cleaning up existing files in the root...");
    const files = await fs.readdir(rootDir);
    for (const file of files) {
      if (
        ![
          "src",
          "public",
          "node_modules",
          "scripts",
          "package.json",
          "package-lock.json",
          ".git",
          ".gitignore",
        ].includes(file)
      ) {
        await fs.remove(path.join(rootDir, file));
      }
    }

    console.log("Moving build files to the root...");
    await fs.copy(buildDir, rootDir);
    console.log("Build files moved successfully.");

    console.log("Cleaning up the build directory...");
    await fs.remove(buildDir);

    console.log("Deployment complete! 🚀");
  } catch (err) {
    console.error("Deployment failed:", err.message);
    console.error("Stack Trace:", err.stack);
    process.exit(1);
  }
})();
