var ghpages = require('gh-pages');

ghpages.publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/nikee9/nikee9@github.io', // Update to point to your repository  
        user: {
            name: 'Nikhil', // update to use your name
            email: 'ngnikee67@hotmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)