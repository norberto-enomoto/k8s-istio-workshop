(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{231:function(s,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"install-kubernetes-to-the-vms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-kubernetes-to-the-vms"}},[s._v("#")]),s._v(" Install Kubernetes to the VMs")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Screencast: "),a("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=0&t=106",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://asciinema.org/a/229605?t=106"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("This diagram is showing how your environment will looks like after this lab:")]),s._v(" "),a("p",[a("img",{attrs:{src:t(96),alt:"Lab diagram",title:"Lab diagram"}})]),s._v(" "),a("p",[s._v("Install k8s using "),a("code",[s._v("kubeadm")]),s._v(" to the provisioned VMs:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./files/install-k8s-kubeadm.sh\n")])])]),a("p",[s._v("Check if all nodes are up:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/kubeconfig.conf\nkubectl get nodes -o wide\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("NAME                             STATUS   ROLES    AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME\npruzicka-k8s-istio-workshop-node01   Ready    master   2m    v1.13.3   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".1 LTS   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.15")]),s._v(".0-43-generic   docker://18.6.1\npruzicka-k8s-istio-workshop-node02   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   45s   v1.13.3   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.12   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".1 LTS   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.15")]),s._v(".0-43-generic   docker://18.6.1\npruzicka-k8s-istio-workshop-node03   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   50s   v1.13.3   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.13   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".1 LTS   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.15")]),s._v(".0-43-generic   docker://18.6.1\n")])])]),a("p",[s._v("View services, deployments, and pods:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl get svc,deploy,po --all-namespaces -o wide\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("NAMESPACE     NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         AGE     SELECTOR\ndefault       service/kubernetes   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP         2m16s   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   service/kube-dns     ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.10   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("/UDP,53/TCP   2m11s   k8s-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-dns\n\nNAMESPACE     NAME                            READY   UP-TO-DATE   AVAILABLE   AGE     CONTAINERS   IMAGES                     SELECTOR\nkube-system   deployment.extensions/coredns   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("           2m11s   coredns      k8s.gcr.io/coredns:1.2.6   k8s-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-dns\n\nNAMESPACE     NAME                                                         READY   STATUS    RESTARTS   AGE    IP               NODE                             NOMINATED NODE   READINESS GATES\nkube-system   pod/coredns-86c58d9df4-tlmvh                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          116s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.2       pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/coredns-86c58d9df4-zk685                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          116s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.3       pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/etcd-pruzicka-k8s-istio-workshop-node01                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          79s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-apiserver-pruzicka-k8s-istio-workshop-node01            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          72s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-controller-manager-pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          65s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-flannel-ds-amd64-cvpfq                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          65s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.13   pruzicka-k8s-istio-workshop-node03   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-flannel-ds-amd64-ggqmv                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          60s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.12   pruzicka-k8s-istio-workshop-node02   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-flannel-ds-amd64-ql6g6                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          117s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-proxy-79mx8                                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          117s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-proxy-f99q2                                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          65s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.13   pruzicka-k8s-istio-workshop-node03   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-proxy-w4tbd                                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          60s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.12   pruzicka-k8s-istio-workshop-node02   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nkube-system   pod/kube-scheduler-pruzicka-k8s-istio-workshop-node01            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          78s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".250.11   pruzicka-k8s-istio-workshop-node01   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Configure the access to Kubernetes cluster also from your local PC.")])]),s._v(" "),a("p",[s._v("Open new terminal on your PC and run:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/tmp/test/k8s-istio-workshop/kubeconfig.conf\nkubectl get nodes -o wide\n")])])]),a("p",[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg",alt:"Kubernetes",title:"Kubernetes"}})])])}),[],!1,null,null,null);e.default=r.exports},96:function(s,e,t){s.exports=t.p+"assets/img/kubeadm_diagram.dfa2d371.png"}}]);