var scene, camera, renderer, geometry, material, mesh;

function start() {
  
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({color:0xD1A963, wireframe:true});

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor(0x1F5A94);
    renderer.setSize((window.innerWidth - 50), (window.innerHeight - 25));

    var show = document.getElementById('container');
    
    show.appendChild(renderer.domElement);

    function animate() {

        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        mesh.rotation.z += 0.05;

        renderer.render(scene, camera);

    }
    
    animate();

}

window.onload = start;

