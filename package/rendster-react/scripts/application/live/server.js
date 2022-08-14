const esbuild = require('esbuild');
const common = require('./common');



esbuild.build({
    entryPoints: [
        'source/services/server/application/server/index.ts',
    ],
    platform: 'node',
    external: ['./node_modules/*'],
    outdir: 'distribution/application',
    ...common,
});
