(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(s,a,e){s.exports=e.p+"assets/img/cerebro.9830c0da.png"},210:function(s,a,e){s.exports=e.p+"assets/img/kibana.b67666a4.png"},234:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"install-elasticsearch-and-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-elasticsearch-and-kibana"}},[s._v("#")]),s._v(" Install ElasticSearch and Kibana")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("Screencast: "),t("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=0&t=228",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://asciinema.org/a/229605?t=228"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("Add "),t("a",{attrs:{href:"https://github.com/upmc-enterprises/elasticsearch-operator",target:"_blank",rel:"noopener noreferrer"}},[s._v("ElasticSearch operator"),t("OutboundLink")],1),s._v("\nto Helm:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("helm repo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" es-operator https://raw.githubusercontent.com/upmc-enterprises/elasticsearch-operator/master/charts/\n")])])]),t("p",[s._v("Install ElasticSearch operator:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("helm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --wait --name elasticsearch-operator es-operator/elasticsearch-operator --set rbac.enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True --namespace es-operator\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n")])])]),t("p",[s._v("Check how the operator looks like:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get svc,deploy,po --namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("es-operator -o wide\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("NAME                                           READY   UP-TO-DATE   AVAILABLE   AGE    CONTAINERS               IMAGES                                          SELECTOR\ndeployment.extensions/elasticsearch-operator   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           106s   elasticsearch-operator   upmcenterprises/elasticsearch-operator:0.0.12   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-operator,release"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-operator\n\nNAME                                          READY   STATUS    RESTARTS   AGE    IP           NODE                             NOMINATED NODE   READINESS GATES\npod/elasticsearch-operator-5dc59b8cc5-6946l   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          106s   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.9   pruzicka-k8s-istio-workshop-node03   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("Install ElasticSearch cluster:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("helm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --wait --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch --namespace logging es-operator/elasticsearch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set kibana.enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set cerebro.enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set storage.class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rook-ceph-block "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("clientReplicas")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",masterReplicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",dataReplicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("\n")])])]),t("p",[s._v("Check ElasticSearch components:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get svc,deploy,po,pvc,elasticsearchclusters --namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("logging -o wide\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("NAME                                                    TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   SELECTOR\nservice/cerebro-elasticsearch-cluster                   ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.105")]),s._v(".197.151   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     18m   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("role")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cerebro\nservice/elasticsearch-discovery-elasticsearch-cluster   ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.111")]),s._v(".76.241    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("/TCP   18m   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster,role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master\nservice/elasticsearch-elasticsearch-cluster             ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.104")]),s._v(".103.49    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("/TCP   18m   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster,role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("client\nservice/es-data-svc-elasticsearch-cluster               ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.98")]),s._v(".179.244    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("/TCP   18m   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster,role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data\nservice/kibana-elasticsearch-cluster                    ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".19.242    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     18m   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("role")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kibana\n\nNAME                                                    READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS                        IMAGES                                                    SELECTOR\ndeployment.extensions/cerebro-elasticsearch-cluster     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           18m   cerebro-elasticsearch-cluster     upmcenterprises/cerebro:0.6.8                             "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster,name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cerebro-elasticsearch-cluster,role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cerebro\ndeployment.extensions/es-client-elasticsearch-cluster   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           18m   es-client-elasticsearch-cluster   upmcenterprises/docker-elasticsearch-kubernetes:6.1.3_0   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cluster")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-cluster,component"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster,name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("es-client-elasticsearch-cluster,role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("client\ndeployment.extensions/kibana-elasticsearch-cluster      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           18m   kibana-elasticsearch-cluster      docker.elastic.co/kibana/kibana-oss:6.1.3                 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster,name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kibana-elasticsearch-cluster,role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kibana\n\nNAME                                                    READY   STATUS    RESTARTS   AGE   IP            NODE                             NOMINATED NODE   READINESS GATES\npod/cerebro-elasticsearch-cluster-64888cf977-dgb8g      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          18m   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.9    pruzicka-k8s-istio-workshop-node01   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npod/es-client-elasticsearch-cluster-8d9df64b7-tvl8z     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          18m   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.11   pruzicka-k8s-istio-workshop-node03   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npod/es-data-elasticsearch-cluster-rook-ceph-block-0     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          18m   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.11   pruzicka-k8s-istio-workshop-node02   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npod/es-master-elasticsearch-cluster-rook-ceph-block-0   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          18m   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.10   pruzicka-k8s-istio-workshop-node02   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npod/kibana-elasticsearch-cluster-7fb7f88f55-6sl6j       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          18m   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.9    pruzicka-k8s-istio-workshop-node02   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nNAME                                                                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS      AGE\npersistentvolumeclaim/es-data-es-data-elasticsearch-cluster-rook-ceph-block-0     Bound    pvc-870ad81a-2863-11e9-a470-fa163e90237a   1Gi        RWO            rook-ceph-block   18m\npersistentvolumeclaim/es-data-es-master-elasticsearch-cluster-rook-ceph-block-0   Bound    pvc-86fcb9ce-2863-11e9-a470-fa163e90237a   1Gi        RWO            rook-ceph-block   18m\n\nNAME                                                              AGE\nelasticsearchcluster.enterprises.upmc.com/elasticsearch-cluster   18m\n")])])]),t("h2",{attrs:{id:"install-fluentbit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-fluentbit"}},[s._v("#")]),s._v(" Install "),t("a",{attrs:{href:"https://fluentbit.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("FluentBit"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("Install FluentBit using Helm:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("helm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --wait stable/fluent-bit --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fluent-bit --namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("logging "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set metrics.enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set backend.type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("es "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set backend.es.time_key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@ts'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set backend.es.host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch-elasticsearch-cluster "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set backend.es.tls"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --set backend.es.tls_verify"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("off\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("Run the following command on your local environment.")])]),s._v(" "),t("p",[s._v("Configure port forwarding to Kibana:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl -n logging port-forward "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl -n logging get pod -l "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("role")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kibana -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{.items[0].metadata.name}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v(":5601 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("p",[s._v("Configure ElasticSearch:")]),s._v(" "),t("ul",[t("li",[s._v("Navigate to the "),t("a",{attrs:{href:"https://localhost:5601",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kibana UI"),t("OutboundLink")],1),s._v(" ("),t("a",{attrs:{href:"https://localhost:5601",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://localhost:5601"),t("OutboundLink")],1),s._v(")\nand click the "),t("strong",[s._v("Set up index patterns")]),s._v(" in the top right.")]),s._v(" "),t("li",[s._v("Use "),t("code",[s._v("*")]),s._v(" as the "),t("strong",[s._v("index pattern")]),s._v(", and click "),t("strong",[s._v("Next step")]),s._v(".")]),s._v(" "),t("li",[s._v("Select "),t("code",[s._v("@ts")]),s._v(" as the Time Filter field name, and click "),t("strong",[s._v("Create index pattern")]),s._v(".")])]),s._v(" "),t("p",[s._v("Check FluentBit installation:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get -l "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fluent-bit svc,pods --all-namespaces -o wide\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("NAMESPACE   NAME                                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   SELECTOR\nlogging     service/fluent-bit-fluent-bit-metrics   ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.97")]),s._v(".33.162   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/TCP   80s   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fluent-bit,release"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fluent-bit\n\nNAMESPACE   NAME                              READY   STATUS    RESTARTS   AGE   IP            NODE                             NOMINATED NODE   READINESS GATES\nlogging     pod/fluent-bit-fluent-bit-426ph   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          80s   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.10   pruzicka-k8s-istio-workshop-node01   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nlogging     pod/fluent-bit-fluent-bit-c6tbx   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          80s   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.12   pruzicka-k8s-istio-workshop-node03   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nlogging     pod/fluent-bit-fluent-bit-zfkqr   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          80s   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.12   pruzicka-k8s-istio-workshop-node02   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("Run the following command on your local environment.")])]),s._v(" "),t("p",[s._v("Configure port forwarding to Cerebro:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl -n logging port-forward "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl -n logging get pod -l "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("role")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cerebro -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{.items[0].metadata.name}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("p",[t("a",{attrs:{href:"https://github.com/lmenezes/cerebro",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cerebro"),t("OutboundLink")],1),s._v(" ("),t("a",{attrs:{href:"http://localhost:9000",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9000"),t("OutboundLink")],1),s._v("):")]),s._v(" "),t("p",[t("img",{attrs:{src:e(209),alt:"Cerebro",title:"Cerebro"}})]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kibana"),t("OutboundLink")],1),s._v(" ("),t("a",{attrs:{href:"https://localhost:5601",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://localhost:5601"),t("OutboundLink")],1),s._v("):")]),s._v(" "),t("p",[t("img",{attrs:{src:e(210),alt:"Kibana",title:"Kibana"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluentbit.io/assets/img/logo1-default.png",alt:"Fluent Bit",title:"Fluent Bit"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);