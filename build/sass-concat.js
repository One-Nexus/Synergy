const concat = require('concat');
const fs = require('fs');

const files = [
    // vendor
    './node_modules/Sass-Boost/dist/_sass-boost.scss',
    // config
    './src/scss/_config.scss',
    // utilities
    './src/scss/utilities/_clean-selector.scss',
    './src/scss/utilities/_config.scss',
    './src/scss/utilities/_css-properties.scss',
    './src/scss/utilities/_enabled.scss',
    './src/scss/utilities/_get-css-from-map.scss',
    './src/scss/utilities/_get-param.scss',
    './src/scss/utilities/_get-styles.scss',
    './src/scss/utilities/_merge-css-maps.scss',
    './src/scss/utilities/_module-tree.scss',
    './src/scss/utilities/_option.scss',
    './src/scss/utilities/_remove-components.scss',
    './src/scss/utilities/_remove-modifiers.scss',
    './src/scss/utilities/_selector.scss',
    './src/scss/utilities/_setting.scss',
    './src/scss/utilities/_strip-glue.scss',
    './src/scss/utilities/_this.scss',
    './src/scss/utilities/_value-enabled.scss',
    // mixins
    './src/scss/mixins/_module.scss',
    './src/scss/mixins/_component.scss',
    './src/scss/mixins/_modifier.scss',
    './src/scss/mixins/_extend.scss',
    './src/scss/mixins/_context.scss',
    './src/scss/mixins/_option.scss',
    './src/scss/mixins/_value.scss',
    './src/scss/mixins/_pseudo-state.scss'
]

concat(files).then(result => {
    fs.writeFile('./dist/_synergy.scss', result, err => {
        if (err) {
            return console.log(err);
        }
    });
});