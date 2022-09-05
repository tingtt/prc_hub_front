.PHONY: all
all:

.PHONY: clear-aspida
clear-aspida:
	-rm -r domain/model/ApiClient

.PHONY: openapi2aspida
openapi2aspida: clear-aspida
	yarn openapi2aspida \
		-i https://raw.githubusercontent.com/tingtt/prc_hub_back/main/presentation/oas.yml \
		-o domain/model/ApiClient/