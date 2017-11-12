<template lang="html">
  <div>
    <h1 class="title">Docker</h1>
    <p>Docker simplifies building, shipping, and running apps. Docker runs natively on Linux and Windows Server. Docker is NOT the same as using a Virtual Machine. It is faster and lighter.</p>
    
    <div class="container">
      <h2>Grammar</h2>
      <h3>Docker Images</h3>
      <p>An image that is used to build a container. A sort of blueprint. It's a read-only template composed of layered file systems use to share common files and create Docker container instances.</p>
      <h3>Docker Container</h3>
      <p>An iscolated and seured shipping container created from an image that can be run, started, stopped, moved, and deleted.</p>
    </div>
    <div class="container">
      <h2>Benefits</h2>
      <ul>
        <li>Accelerate Developer onboarding</li>
        <li>Eleiminte app conflicts</li>
        <li>Environment (Development, Staging, Production) consistency</li>
        <li>Ship software faster</li>
      </ul>
    </div>
    <div class="container">
      <h2>Docker Tools</h2>
      <p>Provides image and container tools. Visit
        <a href="https://www.docker.com/products/docker-toolbox">Docker toolbox</a> for more info.
      </p>
      <p>These are the tools we'll get</p>
      <ul>
        <li>docker client - to interact and view our images / containers</li>
        <li>docker machine - work with virtual macine to create env variables</li>
        <li>docker compose - run multiple containers, like db, a simple way for containers to speak to one another</li>
        <li>docker kitematic - a ui for other</li>
        <li>VirtualBox - comes with Docker and is managed for us</li>
      </ul>
    </div>
    <div class="container">
      <h2>Setting up.</h2>
      <h3>Installing Docker on a Mac.</h3>
      <p>
        Visit <a href="https://store.docker.com/">the docker store</a> and download the free version, <a href="https://store.docker.com/editions/community/docker-ce-desktop-mac">Ccommunity Edition</a>.
        <blockquote cite="https://store.docker.com/editions/community/docker-ce-desktop-mac">
          Docker CE for Mac is an easy-to-install desktop app for building, debugging, and testing Dockerized apps on a Mac. Docker for Mac is a complete development environment deeply integrated with the Mac OS Hypervisor framework, networking, and filesystem. Docker for Mac is the fastest and most reliable way to run Docker on a Mac.
        </blockquote>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
</style>
