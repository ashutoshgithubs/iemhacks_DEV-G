# How to Contribute

Welcome to DEV-G EdTech's contributing guide. Thank you for taking the time to read it! Your help with DEV-G EdTech is extremely welcome. We are particularly motivated to support new contributors and people who are looking to learn and develop their skills.

If you get stuck, please don’t hesitate to [ask questions on Discuss](https://github.com/ashutoshgithubs/iemhacks_DEV-G/discussions) or [raise an issue](https://github.com/ashutoshgithubs/iemhacks_DEV-G/issues).

This guide documents the best way to contribute to the project when adding things listed below in Contributing Content.

- **Good First Issues**: if you are either new to the repository or still getting started with DEV-G EdTech in general, issues marked as a `good first issue` are ideal.

We welcome contributions from participants of the GSSOC'24 program! Below are some guidelines to help you get started:

### Issue Labels

We have categorized our issues and labeled them with appropriate tags to help contributors find tasks that match their skills and interests. For GSSoC'24 participants, we have included specific labels indicating the difficulty level of each issue:

- `gssoc`: Indicates that the issue is suitable for GSSoC'24 participants.
- `level1`: Represents beginner-friendly tasks with minimal complexity.
- `level2`: Represents intermediate-level tasks with moderate complexity.
- `level3`: Represents advanced tasks with higher complexity.

Please feel free to explore our list of issues and choose one that aligns with your skills and interests. If you have any questions or need assistance, don't hesitate to reach out to us.

- **Suggesting Changes**: If you would like to suggest entirely new website content or code, please [open an issue](https://github.com/ashutoshgithubs/iemhacks_DEV-G/issues) to discuss it first.

## Reporting Bugs

We use GitHub issues to track all bugs and feature requests. Feel free to open an issue over [here](https://github.com/ashutoshgithubs/iemhacks_DEV-G/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=) if you have found a bug or wish to see a feature implemented.

Please include images and browser-specific information if the bug is related to some visual aspect of the site. This tends to make it easier to reproduce and fix.

## Git and GitHub Workflow

The preferred workflow for contributing to a repository is to fork the main repository on GitHub, clone and develop on a new branch.

If you aren't familiar with how to work with Github or would like to learn it, here is [a great tutorial](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

Feel free to use any approach while creating a PR. Here are a few suggestions from our team:

- If you are unsure whether your changes will be accepted or want to discuss the method before delving into it, please create an issue and ask.
- Clone the repo locally (or continue editing directly in GitHub if the change is small). Checkout
  out the branch that you created.
- Create a draft PR with a small initial commit. Here's how you can [create a draft pull request.](https://github.blog/2019-02-14-introducing-draft-pull-requests/).
- Continue developing and feel free to ask questions in the PR if you run into obstacles or uncertainty as you make changes.
- Review your implementation according to the checks noted in the PR template.
- Once you feel your branch is ready, change the PR status to "ready to review."
- Consult the tasks noted in the PR template.
- When merging, consider cleaning up the commit body.

- **Fork the Repository**: Start by forking the repository to your GitHub account. This will create a copy of the repository under your account.
- **Clone the Repository**: Clone the forked repository to your local machine using the following command and Change into the project directory
  `git clone https://github.com/ashutoshgithubs/iemhacks_DEV-G.git`
  ` cd iemhacks_DEV-G`

- **_Checkout the Development Branch_**: The development branch is where active development takes place. To contribute to this project, you'll need to checkout the specific development branch designated for contributions. Run the following command to switch to the appropriate branch:
  `git checkout DevG_Contribute`

- **Make Your Changes**:
- Now you're ready to dive into the code! Open the project in your favourite code editor.
- Make your changes to the files following the project's coding conventions. (If there are no specific conventions documented, follow common JavaScript and React best practices.)

- **Test the change you made**:
- Run the development server (`npm run dev`) and test your modifications thoroughly. Make sure your changes don't introduce any new bugs or break existing functionalities.

- **Commit Your Change**:

- Use Git to track your changes. Stage the modified files using
  `git add <filename>`  
   or
  `git add .` to stage all changes.

- Commit your staged changes with a descriptive commit message using
  `git commit -m "Your informative message here"`.

- **Push Your Changes to Your Fork**:

- Push your committed changes to your forked repository on GitHub using:

  `git push origin DevG_Contribute`

- **Create a Pull Request**:

- Go to your forked repository on GitHub.
- Click on the "Pull requests" tab and then the "New pull request" button.
- Select the branch containing your changes from the "Head" branch dropdown.
- Leave the "Base" branch as "DevG_Contribute".
- Write a clear and concise title and description explaining your changes and their purpose.
- Click "Create pull request" to submit your changes for review.

### Alternatively contribute using GitHub Desktop

1. - **Open GitHub Desktop**:
     Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. - **Clone the Repository**:
   - If you haven't cloned the iemhacks_DEV-G repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the iemhacks_DEV-G repository from the list of repositories on GitHub and clone it to your local machine.

3. - **Switch to the Correct Branch**:
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. - **Make Changes**:
     Make your changes to the code or files in the repository using your preferred code editor.

5. - **Commit Changes**:
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. - **Push Changes to GitHub**:
     After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. - **Create a Pull Request**:

- Go to the GitHub website and navigate to your fork of the iemhacks_DEV-G repository.
- You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. - **Submit**:
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. - **Review and Feedback**:

- The project maintainers will review your pull request and might request clarifications or suggest improvements.
- Address any feedback promptly and make any necessary adjustments.

10. - **Merging Your Changes**:

- Once your pull request is reviewed and approved, the maintainers will merge your changes into the main DEV-G EdTech codebase. Congratulations, you've become a contributor! 🎉🎉

⭐️ Support the Project DEV-G EdTech

If you find this project DEV-G EdTech helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors. To star the project, simply visit its GitHub repository and click on the "Star" button in the top-right corner.

Thank you for your support! 🌟
