module.exports = ({ env }) => (
	{
  		url: env('https://morning-everglades-28972.herokuapp.com/'),
  		upload: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: 'rickignitemedia',
            api_key: '976551539418336',
            api_secret: 'jfwNtaJ0aIlL1Zws2_X9HKxOl2E',
          },
        },
	}
);
 