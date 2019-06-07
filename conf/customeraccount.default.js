module.exports = {
	// The configuration settings for your Swagger service.
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'customeraccount': {
				// It is possible to override Swagger URI options when constructing
				// outbound requests from the Swagger plugin.
				uri: {
					 protocol: 'http',
					 host: 'customeraccount',
					  port: 8080,
					 basePath: '/api'
				}
			}
		}
	}};
