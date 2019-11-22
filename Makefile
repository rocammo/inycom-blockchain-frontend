PROJECT = "inycom-blockchain-frontend"


all: install build serve

install: ;@echo "Installing ${PROJECT}....."; \
	npm install

serve: ;@echo "Serving ${PROJECT}....."; \
	nodemon --watch public client.js

clean : ;
	rm -rf node_modules


.PHONY: install serve clean