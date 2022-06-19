module.exports = [
    {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
              'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
              upgradeInsecureRequests: null,
            },
          },
        },
    },
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::favicon',
    'strapi::public',
    'strapi::errors',
    {
      name: 'strapi::cors',
      config: {
        enabled: true,
        headers: '*',
        origin: ['*']
      }
    },
];