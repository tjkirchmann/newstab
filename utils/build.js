const { exec } = require('child_process');
const INPUT_CSS_FILE = 'app/styles/tailwind_config.css'
const OUPUT_CSS_FILE = 'app/styles/_tailwind.css'

// Utility function to run shell commands
function runCommand(command, description) {
    console.log(`\n> ${description}`);
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                reject(error);
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
}

// Main build process
async function build() {
    try {
        console.log('Starting the build process...');

        // Build Tailwind CSS
        await runCommand(
            `npx tailwindcss -i ${INPUT_CSS_FILE} -o ${OUPUT_CSS_FILE} --minify`,
            'Building Tailwind CSS'
        );

        console.log('Build process complete.');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();
