Vagrant.configure("2") do |config|
  config.vm.box = "vagrant-node-0.10-0.0.5"
  config.vm.box_url = "https://github.com/GeoffreyPlitt/vagrant-node-0.10/releases/download/v0.0.5/vagrant-node-0.10-0.0.5.box"
  config.vm.network :forwarded_port, host: 4000, guest: 4000
  config.vm.provision :shell, :inline => $BOOTSTRAP_SCRIPT # see below
  config.ssh.forward_agent = true
end

$BOOTSTRAP_SCRIPT = <<EOF
  set -e # Stop on any error

  export DEBIAN_FRONTEND=noninteractive

  # Make vagrant automatically go to /vagrant when we ssh in.
  echo "cd /vagrant" | sudo tee -a ~vagrant/.profile

  # Copy private keys
  if [ -e /vagrant/.keys ]; then
    cat /vagrant/.keys | sudo tee -a ~vagrant/.bashrc > /dev/null
  fi

  echo VAGRANT IS READY.
EOF
