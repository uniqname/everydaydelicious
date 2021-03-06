/*
Example usage:
{{gh-url-preview prefix="tag" slug=theSlugValue tagName="p" classNames="description"}}
*/
var urlPreview = Ember.Component.extend({
    classNames: 'ghost-url-preview',
    prefix: null,
    slug: null,
    theUrl: null,

    generateUrl: function () {
        // Get the blog URL and strip the scheme
        var blogUrl = this.get('config').blogUrl,
            noSchemeBlogUrl = blogUrl.substr(blogUrl.indexOf('://') + 3), // Remove `http[s]://`

            // Get the prefix and slug values
            prefix = this.get('prefix') ? this.get('prefix') + '/' : '',
            slug = this.get('slug') ? this.get('slug') : '',

            // Join parts of the URL together with slashes
            theUrl = noSchemeBlogUrl + '/' + prefix + (slug ? slug + '/' : '');

        this.set('the-url', theUrl);
    }.on('didInsertElement').observes('slug')
});

export default urlPreview;
