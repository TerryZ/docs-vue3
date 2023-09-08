# build project
# npm i -g cnpm --registry=https://registry.npm.taobao.org
# cnpm i
#npm i -f --registry=https://registry.npmmirror.com/
#npm run build
pnpm i
pnpm build

# clone gitee and github project

# add proxy in git global config
git config --global http.proxy http://192.168.1.100:10808
# git clone https://terryz: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@github.com/TerryZ/TerryZ.github.io.git
git clone https://terryz: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@github.com/TerryZ/docs-vue3.git
git checkout master

cd docs-vue3
rm -rf docs
mkdir docs

# copy builded file to vue folder
cp -r ../docs/.vitepress/dist/* docs

git config user.email "terry5@foxmail.com"
git config user.name "TerryZ"

# git commit and push to github
git add --all docs
git commit -m 'auto commit changes and push'
# git push https://terryz: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@github.com/TerryZ/TerryZ.github.io.git
git push https://terryz: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@github.com/TerryZ/docs-vue3.git
# remove proxy in git global config
git config --global --unset http.proxy