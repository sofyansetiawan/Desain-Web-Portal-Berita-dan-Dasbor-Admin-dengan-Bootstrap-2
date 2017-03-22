new TWTR.Widget({
						version: 2,
						type: 'profile',
						rpp: 10,
						interval: 3000,
						width: 300,
						height: 300,
						theme: {
						shell: {
						background: '#99D8FF',
						color: '#000000',
                                                margin: '0 auto'
						},
						tweets: {
						background: 'transparent',
						color: '#000000',
						links: '#135a9e'
						}
						},
						features: {
						scrollbar: false,
						loop: true,
						live: true,
						hashtags: true,
						timestamp: true,
						avatars: true,
						behavior: 'default'
						}
						}).render().setUser('memoarema').start();
