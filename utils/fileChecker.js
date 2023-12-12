const fs = require("fs").promises;
exports.deleteFile = async (filePath) => {
  try {
    // Check if the file exists
    await fs.access(filePath, fs.constants.F_OK);

    // File exists, so delete it
    await fs.unlink(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (error) {
    // Handle the error (e.g., log a message)
    // console.log(
    //   `File does not exist or error deleting file ${filePath}: ${error.message}`
    // );
  }
};
