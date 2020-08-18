NPM := npm
VENDOR_DIR = assets/vendor/
JEKYLL := jekyll
PROJECT_DEPS := package.json

install: $(PROJECT_DEPS)
	$(NPM) install

update: $(PROJECT_DEPS)
	$(NPM) update

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	cp node_modules/chart.js/dist/Chart.min.js $(VENDOR_DIR)
	cp node_modules/webfontloader/webfontloader.js $(VENDOR_DIR)
	cp node_modules/lodash/lodash.min.js $(VENDOR_DIR)
	cp node_modules/chartjs-plugin-style/dist/chartjs-plugin-style.min.js $(VENDOR_DIR)
	cp node_modules/chartjs-plugin-stacked100/src/index.js $(VENDOR_DIR)

build: include-npm-deps
	JEKYLL_ENV=production $(JEKYLL) build

serve: include-npm-deps
	$(JEKYLL) serve --livereload