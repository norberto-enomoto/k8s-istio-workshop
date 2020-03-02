(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{230:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"create-vms-in-openstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-vms-in-openstack"}},[s._v("#")]),s._v(" Create VMs in OpenStack")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Screencast: "),a("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=0&t=1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://asciinema.org/a/229605?t=1"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("Before you start with the main content of the workshop, you need to provision\nthe VMs in OpenStack.")]),s._v(" "),a("p",[s._v("Create VMs in OpenStack using Ubuntu Docker image.")]),s._v(" "),a("h2",{attrs:{id:"prepare-the-local-working-environment-inside-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-local-working-environment-inside-docker"}},[s._v("#")]),s._v(" Prepare the local working environment inside Docker")]),s._v(" "),a("p",[s._v("Run Ubuntu docker image and mount the directory there:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/tmp/test "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/tmp/test\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SSH_AUTH_SOCK")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  docker run -it --rm -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SSH_AUTH_SOCK")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SSH_AUTH_SOCK")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SSH_AUTH_SOCK")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SSH_AUTH_SOCK")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v(":/mnt -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh:/root/.ssh:ro ubuntu\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  docker run -it --rm -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v(":/mnt -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh:/root/.ssh:ro ubuntu\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("All commands in the labs should be executed inside the Docker container.\nOnly few "),a("code",[s._v("kubectl")]),s._v(" needs to be executed directly on the PC and it's always\nexplicitly mentioned in the docs.")])]),s._v(" "),a("p",[s._v("Install necessary software into the Docker container:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update -qq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y -qq apt-transport-https byobu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gnupg jq openssh-client psmisc siege "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n")])])]),a("p",[s._v("Install "),a("code",[s._v("kubernetes-client")]),s._v(" package:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://packages.cloud.google.com/apt/doc/apt-key.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://apt.kubernetes.io/ kubernetes-xenial main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list.d/kubernetes.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -qq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y -qq kubectl\n")])])]),a("p",[s._v("Install "),a("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Terraform"),a("OutboundLink")],1),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TERRAFORM_LATEST_VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://checkpoint-api.hashicorp.com/v1/check/terraform "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -r -M "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".current_version"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --silent --location https://releases.hashicorp.com/terraform/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TERRAFORM_LATEST_VERSION}")]),s._v("/terraform_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TERRAFORM_LATEST_VERSION}")]),s._v("_linux_amd64.zip --output /tmp/terraform_linux_amd64.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" -o /tmp/terraform_linux_amd64.zip -d /usr/local/bin/\n")])])]),a("p",[s._v("Change directory to "),a("code",[s._v("/mnt")]),s._v(" where the git repository is mounted:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /mnt\n")])])]),a("h2",{attrs:{id:"provision-vms-in-openstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provision-vms-in-openstack"}},[s._v("#")]),s._v(" Provision VMs in OpenStack")]),s._v(" "),a("p",[s._v("Start 3 VMs (one master and 2 workers) where the k8s will be installed.")]),s._v(" "),a("p",[s._v("Terraform diagram:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1200/1*lYFNHNM03biX_95IQMayUw.png",alt:"Terraform",title:"Terraform"}}),s._v("\n("),a("a",{attrs:{href:"https://hackernoon.com/terraform-openstack-ansible-d680ea466e22",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hackernoon.com/terraform-openstack-ansible-d680ea466e22"),a("OutboundLink")],1),s._v(")")]),s._v(" "),a("p",[s._v("Generate ssh keys if not exists:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh/id_rsa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -m 0700 -d "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ssh-keygen -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" -t rsa -f "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.ssh/id_rsa -q -N "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-agent must be running...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SSH_AUTH_SOCK")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("ssh-agent"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("ssh-add -l"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The agent has no identities."')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" ssh-add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("Clone this git repository:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ruzickap/k8s-istio-workshop\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" k8s-istio-workshop\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("STOP")]),s._v(" "),a("p",[s._v("Modify the OpenStack access credentials in the following Terraform variable file!")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OPENSTACK_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPENSTACK_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("default}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" terrafrom/openstack/terraform.tfvars "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\nopenstack_auth_url                          = "https://ic-us.ssl.mirantis.net:5000/v3"\nopenstack_instance_flavor_name              = "dev.log"\nopenstack_instance_image_name               = "bionic-server-cloudimg-amd64-20190119"\nopenstack_networking_subnet_dns_nameservers = ["172.19.80.70"]\nopenstack_password                          = "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OPENSTACK_PASSWORD")]),s._v('"\n# drivetrain-team\nopenstack_tenant_name                       = "mirantis-services-team"\nopenstack_user_name                         = "'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"\nopenstack_user_domain_name                  = "ldap_mirantis"\nprefix                                      = "'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('-k8s-istio-workshop"\nEOF')]),s._v("\n")])])]),a("p",[s._v("Download Terraform components:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("terraform init -var-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("terrafrom/openstack/terraform.tfvars terrafrom/openstack\n")])])]),a("p",[s._v("Create VMs in OpenStack:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("terraform apply -auto-approve -var-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("terrafrom/openstack/terraform.tfvars terrafrom/openstack\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nvms_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    pruzicka-k8s-istio-workshop-node01.01.localdomain,\n    pruzicka-k8s-istio-workshop-node02.01.localdomain,\n    pruzicka-k8s-istio-workshop-node03.01.localdomain\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nvms_public_ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".240.185,\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".242.218,\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".240.44\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("At the end of the output you should see 3 IP addresses which\nshould be accessible by ssh using your public key "),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(".")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.openstack.org/themes/openstack/images/openstack-logo/2016R/OpenStack-Logo-Horizontal.SVG",alt:"Openstack",title:"Openstack"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);