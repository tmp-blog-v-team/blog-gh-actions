FROM ghcr.io/jpaztech/blog-build-tools:latest

RUN apt update && apt install -y curl

ADD script.sh /
ADD gulpfile.js /

CMD "/script.sh"
