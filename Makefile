
lint:
	cfn-lint cloudformation.yaml
build:
	rm -rf ./dist && mkdir ./dist 
	cp -r ./src/* ./dist
	cp package.json package-lock.json ./dist
	npm i --only=prod
	cp -r node_modules dist
	zip -r ./dist/api-lambda.zip ./dist/*
	aws s3 cp ./dist/api-lambda.zip s3://querof-labmbda-bucket2/ --profile secundary

deploy:
	# make build
	aws cloudformation deploy --stack-name api-lambda2  --template-file cloudformation.yaml --capabilities CAPABILITY_IAM --profile secundary --no-fail-on-empty-changeset

delete:
	aws cloudformation delete-stack --stack-name api-lambda

run_api_locally:
	sam local start-api --template cloudformation.yaml

run_lambda_locally:
	sam local invoke  -d 9999 LambdaFunction --template cloudformation.yaml
