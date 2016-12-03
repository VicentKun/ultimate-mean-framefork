/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    '@angular':                   '/scripts/angular/',
    'angular2-in-memory-web-api': '/scripts/angular2-in-memory-web-api/',
    'rxjs':                       '/scripts/rxjs/',
    'ng2-metadata':               '/scripts/ng2-metadata/'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'ng2-metadata': { main: 'ng2-metadata.umd.min.js', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);







// /**
//  * System configuration for Angular 2 samples
//  * Adjust as necessary for your application needs.
//  */
// (function (global) {
//     // map tells the System loader where to look for things
//     var map = {
//         'app': 'app', // 'dist',
//         '@angular': 'node_modules/@angular',
//         'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api/bundles',
//         'rxjs': 'node_modules/rxjs',
//         'ng2-metadata': 'node_modules/ng2-metadata/bundles'

//     };
//     // packages tells the System loader how to load when no filename and/or no extension
//     var packages = {
//         'app': { main: 'main.js', defaultExtension: 'js' },
//         'rxjs': { defaultExtension: 'js' },
//         'angular2-in-memory-web-api': { main: 'in-memory-web-api.umd.js', defaultExtension: 'js' },
//         'ng2-metadata': { main: 'ng2-metadata.umd.min.js', defaultExtension: 'js' }
//     };
//     var ngPackageNames = [
//       'common',
//       'compiler',
//       'core',
//       'http',
//       'platform-browser',
//       'platform-browser-dynamic',
//       'router',
//       'upgrade',
//     ];
//     // Individual files (~300 requests):
//     function packIndex(pkgName) {
//         packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
//     }
//     // Bundled (~40 requests):
//     function packUmd(pkgName) {
//         if (pkgName == "router") {
//             packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
//         } else {
//             packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
//         }
//     }
//     // Most environments should use UMD; some (Karma) need the individual index files
//     var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
//     // Add package entries for angular packages
//     ngPackageNames.forEach(setPackageConfig);

//     var config = {
//         map: map,
//         packages: packages
//     };

//     console.log(config);

//     System.config(config);

// })(this);
