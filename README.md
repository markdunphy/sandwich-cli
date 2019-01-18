# Barney Brown Sandwich CLI
Order your sandwich from the CLI because why not. Read this entire README before you do anything.

### Authentication
The Barney Brown Sandwich CLI (BBSCLI) refreshes authentication each time an order is placed to ensure your sandwich gets to you on the first try. For this reason you'll need to copy `config.dist.js` as `config.js`  and fill in the email/password values before use.

### Order Config
Fill in your order details in the config file you created above. These will have to be pulled from the request Barney Brown makes when you submit an order through their website. You may use Charles Proxy or Chrome Web Inspector or whatever network traffic analyzer you'd like for this part.

### Usage
Clone this repository and run `npm link` in the root directory to get the `sandwich` command added to your PATH.
```
$ git clone git@github.com:markdunphy/sandwich-cli.git
$ cd bbscli/
$ npm link
```

Running the `sandwich` command will order your preconfigured sandwich for you. There is no debounce or other safeguard to prevent you from accidentally ordering twice if you submit the command more than once. **Run this at your own risk.** If you order an extra by accident, I will help you eat it but I will absolutely not pay for it or be held liable for the ~$12.

```
$ sandwich
```

### Contributing
Go for it.