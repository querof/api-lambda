
lint:
	cfn-lint cloudformation.yaml
build:
	rm -rf ./dist && mkdir ./dist 
	cp -r ./src/* ./dist
	cp package.json package-lock.json ./dist
	npm i --only=prod
	cp -r node_modules dist
	zip -r ./dist/api-lambda.zip ./dist/*
	aws s3 cp ./dist/api-lambda.zip s3://querof-labmbda-bucket/

deploy:
	make build
	aws cloudformation deploy --stack-name api-lambda  --template-file cloudformation.yaml --capabilities CAPABILITY_IAM

delete:
	aws cloudformation delete-stack --stack-name api-lambda
