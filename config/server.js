module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c131e5ec05bf4e482ee3c400ff6631f2'),
    },
  },
  settings: {
    "cors": {
	    "enabled": true,
	    "headers": "*"
	}
  }
});
