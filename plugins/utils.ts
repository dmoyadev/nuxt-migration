// Any modules in utils folder will be registered
export default defineNuxtPlugin((nuxtApp) => {
    // Setup all utilities
    // Filters, directives global components and helper functions are setup
    const files = import.meta.glob("./*.js", { eager: true });
    for (const key in files) {
        if (key === "./index.js") continue;  /* Every javascript file except index.js file */

        const folderType = key.replace(/(\.\/|\.js)/g, "").split('/');
        const moduleName = folderType.length > 1
            ? folderType[folderType.length - 1]
            : folderType[0];
        const module: any = files[key];

        switch (folderType[0]) {
            case 'mixins':
                nuxtApp.vueApp.mixin(module);
                break;
            case 'directives':
                nuxtApp.vueApp.directive(moduleName, module);
                break;
            case 'functions':
                inject(moduleName, module);
                break;
            default:
                break;
        }
    }
});
