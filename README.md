**To deploy correctly, some adjustments were made in some files:**

# vite.config.ts:
Add inside the "export default" area:
```
build: {  
   // Relative path string (relative to project root)
   outDir: "dist",  
   // Optional: Forces Vite to empty the folder before building  
   emptyOutDir: true,  
},
 
// Tells Vite the base public path when served in development or production, ensuring assets are correctly loaded on GitHub Pages
base: "/",
```

# package.json
  Tells GitHub Pages the final URL where the Project will be hosted, helping to generate correct production links.  
  * Inside the curly brackets, at the top:  
  "homepage": "https://www.alvesmasso.com.br"  

  * Inside the "scripts" object:  
  "predeploy": "npm run build",  
  "deploy": "gh-pages -d dist"  

# CNAME
In the project root, I created a file called CNAME containing the URL to tell GitHub pages which custom domain to use, ensuring the site is accessible via my personalized web address and preventing redirection issues upon future updates.  

# deploy.yml

I created .github/workflows/deploy.yml to tell GitHub Actions how to deploy my project. For that to work, it's necessary to go to the Settings tab, Secrets and Variables sections, Actions subsection and create a new Repository Secret.

_______________________________________________________________________________________

# repo cloning for first deploy

To make it work locally (my first deploy worked locally):  
* I cloned the repo (git bash: git clone + [code tab => code dropdown menu ] path;
* npm install gh-pages --save-dev;
* npm run deploy, it deploys the project and pushes built files to gh-pages.
_______________________________________________________________________________________

# Registro.br

In "Configurar zona DNS", I created:  
* four 'A' type entries with github IP's for each;
* a CNAME entry pointing my domain to my domain @gitHub pages (julianoregisdasilva.github.io).
