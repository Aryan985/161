AFRAME.registerComponent('bullet',{
    init:function(){
        this.shoot()
    },
    shoot:function(){
        window.addEventListener("keydown",e=>{
            if (e.key=="s"){
                var shot = document.createElement("a-entity")
                shot.setAttribute("geometry",{primitive:"sphere",radius:0.01})
                shot.setAttribute("material",{color:"black"})
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                shot.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                var dir = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                dir.getWorldDirection(direction)
                shot.setAttribute('velocity',direction.multiplyScalar(-1))
                var scene=document.querySelector("#scene")
               scene.appendChild(shot)
            }
        })
    }
})