#!/usr/bin/make

TINDER_NAME := "Tinder Clone - React Native"
TINDER_VERSION := "v0.1.0"
TINDER_DESCRIPTION := "Perfect to start an Tinder Clone app."
TINDER_ROOT ?= ${PWD}

-include .env
export

#- Check if required parameter has been set
check-%:
	@test -n "${$(*)}"

.DEFAULT_GOAL := help
.PHONY: help #: Display this help
help:
	@cd ${TINDER_ROOT} && awk 'BEGIN {FS = " ?#?: "; print ""${TINDER_NAME}" "${TINDER_VERSION}"\n"${TINDER_DESCRIPTION}"\n\nUsage: make \033[36m<command>\033[0m\n\nCommands:"} /^.PHONY: ?[a-zA-Z_-]/ { printf "  \033[36m%-10s\033[0m %s\n", $$2, $$3 }' $(MAKEFILE_LIST)

.PHONY: init #: Download dependencies.
init:
	@cd ${TINDER_ROOT} && \
	[[ -d node_modules ]] || yarn install

.PHONY: lint #: Run code quality checks.
lint: init
	@cd ${TINDER_ROOT} && \
	yarn lint

.PHONY: test #: Run tests
tests: init
	@cd ${TINDER_ROOT} && \
	yarn test 

.PHONY: run #: Run Expo Developer tools.
run: init
	@cd ${TINDER_ROOT} && \
	yarn web

.PHONY: clean #: Reset repo back 
clean:
	@cd ${TINDER_ROOT} && \
	rm -r node_modules