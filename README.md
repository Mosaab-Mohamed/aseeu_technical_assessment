# Aseeue Technical Assessment

This repository contains a React app with TypeScript that completes the given tasks. To run the code, please follow the instructions below:

## Installation

- Ensure that you have Node.js and Yarn installed on your machine.
- Clone this repository to your local machine or download the ZIP file.
- Open a terminal and navigate to the project's directory.
- Run the following command to install the dependencies:

yarn install


## Usage

After the installation is complete, you can start the React app by running the following command:

yarn start


This will launch the app in your default browser, and you can interact with it.

## Project Structure

The code for the tasks is located in the `src` directory. Here is a brief overview of the project structure:

- The `DropDown` component implements the first task. It includes smaller components that handle the functionality of a dropdown menu. Props drilling is used for passing data between components, but if the component had more levels, the context API would be used to avoid excessive props drilling.

- The `QuestionForm` component implements the second task as instructed in the provided file. The component is designed to be reusable for both single choice answer and multichoice answer.

The project does not rely on many external packages. The only additional package used is `node-sass` for styling purposes. The focus of the implementation is on the logic and functionality rather than extensive styling.


