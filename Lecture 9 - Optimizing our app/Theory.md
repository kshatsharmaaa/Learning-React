

# Episode 09 - Optimizing Our App

## Theory

### Topics Taught

- Custom Hooks
- Modularity in Code
- Modular Bundling 
- Code Splitting
- Lazy Loading


### Modular Binding

- to keep the size of bundled js file min.. so that it can improve performance
- we do not want to put thousand  components into one file
- if we 1000 of components we cant have 1000 of component loading as files in our browser
- that'll be a lot of work for browser to make a 1000s of calls
- so the mid way: we'll have to make smaller bundles of these files
- This process is known as Chunking / code splitting / dynamic bundling / lazy loading / on demand loading
- to load the component as different bundle, load it as lazy loading
- initiallly our code should not have grocery code but when u go to the grocery page it will load it in different bundle (see in app.js)