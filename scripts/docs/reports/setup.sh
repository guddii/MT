#!/bin/bash

sudo apt-get update
sudo apt install curl -y
sudo apt install -y default-jdk
sudo curl -O https://archive.apache.org/dist/jmeter/binaries/apache-jmeter-5.3.tgz
sudo tar -xvf apache-jmeter-5.3.tgz
# cd $GITHUB_WORKSPACE/apache-jmeter-5.3/lib && sudo curl -O https://repo1.maven.org/maven2/kg/apc/cmdrunner/2.2.1/cmdrunner-2.2.1.jar
# cd $GITHUB_WORKSPACE/apache-jmeter-5.3/lib/ext && sudo curl -O https://repo1.maven.org/maven2/kg/apc/jmeter-plugins-manager/1.6/jmeter-plugins-manager-1.6.jar
# cd $GITHUB_WORKSPACE/apache-jmeter-5.3/lib && sudo java -jar cmdrunner-2.2.1.jar --tool org.jmeterplugins.repository.PluginManagerCMD install-all-except jpgc-hadoop,jpgc-oauth,ulp-jmeter-autocorrelator-plugin,ulp-jmeter-videostreaming-plugin,ulp-jmeter-gwt-plugin,tilln-iso8583

echo "$GITHUB_WORKSPACE/apache-jmeter-5.3/bin" >> $GITHUB_PATH
