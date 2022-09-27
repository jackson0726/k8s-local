# k8s-local

## Installing kubectl

[Link install](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" <br/>

curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256" <br/>

echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check <br/>

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl <br/>

kubectl version --client --output=yaml <br/>


## Installing Minikube

[Link install](https://kubernetes.io/vi/docs/tasks/tools/install-minikube)

curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube <br/>

sudo mkdir -p /usr/local/bin/ <br/>

sudo install minikube /usr/local/bin/ <br/>

minikube start <br/>

## Command

minikube status <br/>

"minikube ssh" to log into the Minikube VM<br/>

https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/ <br/>
