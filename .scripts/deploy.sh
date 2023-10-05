!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
GIT_SSH_COMMAND="ssh -i ~/.ssh/githubygmfrontend_ed25519" git pull origin master
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload ygm-frontend-nextjs

echo "Deployment Finished!"