FROM    ubuntu:16.04
LABEL   maintainer="tanzeelrana901223 [at] gmail [dot] com"

ENV DEBIAN_FRONTEND=noninteractive \
    ANDROID_HOME=/opt/android-sdk-linux \
    NODE_VERSION=8.9.4 \
    NPM_VERSION=latest \
    IONIC_VERSION=latest \
    CORDOVA_VERSION=latest \
    GRADLE_VERSION=4.5.1

ADD scripts /usr/local/bin
RUN chmod +x -R /usr/local/bin

# Install basics
RUN apt-get update &&  \
    apt-get install -y git wget sshpass curl unzip build-essential ruby ruby-dev ruby-ffi gcc make && \
    curl --retry 3 -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \
    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \
    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \
    npm install -g npm@"$NPM_VERSION" && \
    npm install -g cordova@"$CORDOVA_VERSION" ionic@"$IONIC_VERSION" && \
    npm cache clear --force && \
    gem install sass && \
    git config --global user.email "tanzeelrana@cmail.carleton.ca.com" && \
    git config --global user.name "Tanzee Rehman" && \
    ls -la
    # ionic start myApp sidemenu --no-interactive
#ANDROID
#JAVA

# install python-software-properties (so you can do add-apt-repository)
# RUN apt-get update && apt-get install -y -q python-software-properties software-properties-common  && \
#     add-apt-repository ppa:webupd8team/java -y && \
#     echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
#     apt-get update && apt-get -y install oracle-java8-installer

#ANDROID STUFF
# RUN echo ANDROID_HOME="${ANDROID_HOME}" >> /etc/environment && \
#     dpkg --add-architecture i386 && \
#     apt-get update && \
#     apt-get install -y --force-yes expect ant wget zipalign libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 qemu-kvm kmod && \
#     apt-get clean && \
#     apt-get autoclean && \
#     rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Android SDK
# RUN cd /opt && \
#     wget --output-document=android-sdk.tgz --quiet http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz && \
#     tar xzf android-sdk.tgz && \
#     rm -f android-sdk.tgz && \
#     chown -R root. /opt

# Install Gradle
# RUN wget https://services.gradle.org/distributions/gradle-"$GRADLE_VERSION"-bin.zip && \
#     mkdir /opt/gradle && \
#     unzip -d /opt/gradle gradle-"$GRADLE_VERSION"-bin.zip && \
#     rm -rf gradle-"$GRADLE_VERSION"-bin.zip

# Setup environment

# ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:/opt/tools:/opt/gradle/gradle-"$GRADLE_VERSION"/bin

# Install sdk elements
# COPY tools /opt/tools

# RUN ["/opt/tools/android-accept-licenses.sh", "android update sdk --all --no-ui --filter platform-tools,tools,build-tools-26.0.0,android-26,build-tools-25.0.0,android-25,extra-android-support,extra-android-m2repository,extra-google-m2repository"]
# RUN unzip ${ANDROID_HOME}/temp/*.zip -d ${ANDROID_HOME}

# Test First Build so that it will be faster later
# RUN cd myApp && \
#     ionic cordova build android --prod --no-interactive --release

# WORKDIR myApp
# EXPOSE 8100 35729
# CMD ["ionic", "serve"]