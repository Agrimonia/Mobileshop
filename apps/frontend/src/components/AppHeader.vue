<template>
  <div>
    <nav>
      <div class="capsule">
        <router-link to="/">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	          width="30px" height="50px" enable-background="new 0 0 130 130" viewBox="0 0 396 396" style="enable-background:new 0 0 394 396;" xml:space="preserve">
            <g transform="translate(0.000000,396.000000) scale(0.100000,-0.100000)">
	            <path class="st0" d="M1755,3784C998,3682,392,3140,205,2400C18,1661,324,866,959,439c630-424,1432-424,2062,0
		          c375,252,642,634,754,1081c187,739-119,1534-754,1961C2646,3733,2188,3843,1755,3784z M2305,3710c172-34,281-67,424-130
		          c429-188,781-561,950-1005c60-157,111-387,111-497c0-88-15-80-24,13c-18,175-123,445-253,648c-120,187-311,379-513,515
		          c-111,75-318,176-450,219c-398,131-844,99-1214-85c-71-35-108-58-224-137c-57-38-206-187-265-264c-201-263-307-577-307-912
		          c0-292,80-558,241-798c66-99,219-260,323-341c301-234,679-336,1036-281c470,72,840,401,964,856c72,264,49,568-61,784
		          c-247,491-785,725-1277,555c-217-74-406-250-501-463c-47-108-66-195-72-332c-6-147,11-240,65-357c135-291,475-462,779-392
		          c150,34,294,140,373,273c71,119,100,311,66,426c-71,235-379,334-549,176c-37-34-62-83-76-149c-16-76-15-79,22-45
		          c46,43,69,53,127,53c178,0,240-186,109-325c-70-74-131-100-239-100c-71,0-94,4-142,27c-103,48-178,135-207,241c-18,64-9,213,18,299
		          c58,182,218,332,413,386c85,23,251,22,333-2c252-75,447-272,510-516c24-90,25-292,2-385c-52-214-154-378-313-505
		          c-239-190-576-243-887-140c-245,82-458,255-590,479c-102,171-137,297-144,508c-9,273,47,484,187,697c133,203,327,360,555,449
		          c273,105,588,110,880,12c220-74,393-182,566-355c337-336,471-763,393-1250C3320,791,2635,263,1847,329c-520,43-964,291-1290,718
		          c-137,181-233,378-291,603c-35,132-34,130-35,100c-1-40,28-197,54-290c87-312,238-566,474-800c82-80,86-85,27-35
		          c-141,122-294,320-386,502c-81,161-117,273-181,561c-5,23-9,136-9,250c0,182,3,224,25,333c73,368,239,680,496,938
		          c254,254,569,421,931,496C1819,3737,2154,3740,2305,3710z M2303,3510c243-42,501-156,637-280l35-32l-35,21c-19,11-73,42-120,69
		          c-158,91-315,147-500,178c-137,22-402,15-531-15c-533-122-946-500-1102-1011c-50-162-62-242-62-425c0-173,20-302,70-459
		          c14-44,24-81,22-83c-7-7-65,133-86,207c-85,304-62,654,63,954c50,120,89,188,173,303c212,290,521,490,869,562c126,26,140,27,310,29
		          C2149,3530,2219,3524,2303,3510z M2258,2854c42-9,88-22,102-30c24-14,23-14-20-9c-137,16-299,17-371,1c-159-35-304-113-413-221
		          c-160-158-242-337-253-556c-11-210,37-360,164-515c24-31,42-59,38-62c-3-3-34,24-68,60c-72,76-145,213-173,323c-21,85-23,254-5,345
		          c71,350,345,613,701,673C2023,2874,2187,2869,2258,2854z M3295,2630c119-181,192-356,235-570c25-124,31-378,11-500
		          c-39-241-135-481-269-669c-70-99-237-267-337-338c-111-80-293-172-416-211c-174-56-295-75-487-75c-95,0-177,4-182,9s52,10,143,10
		          c370,3,701,126,983,365c174,147,326,355,417,569c94,222,135,468,116,703c-21,265-99,498-236,704c-31,49-66,102-76,118l-19,30l27-25
		          C3220,2736,3260,2682,3295,2630z M2809,2208c41-76,81-210,91-305c18-173-17-360-99-520c-83-164-239-317-410-403
		          c-86-43-127-57-241-82c-165-36-398-13-543,53c-54,24-29,24,50-1c79-24,236-41,333-34c101,7,188,29,290,72c509,214,739,820,478,1265
		          c-15,26-28,51-28,55C2731,2321,2785,2252,2809,2208z"/>
            </g>
          </svg>
        </router-link>
        <ul>
          <router-link to="/women"><li>女装</li></router-link>
          <router-link to="/men"><li>男装</li></router-link>
          <router-link to="/sale"><li>促销</li></router-link>
        </ul>
        <router-link to="/cart">
          <div class="cartitem">
            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
              <title id="cart">
                Shopping Cart
              </title>
              <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
            </svg>
          </div>
        </router-link>
        <router-link to="/me">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASOSURBVFhH5ZhpqBZVGIBvWalZVKaZ1o8gUqJc0NIsI0raKEXECnPPBa2whZJ+pS0Q0kJYtGtp+UcpLCLRH7nmQuKKmEalFGRlq1Zmaj3P8Q7e73POzPmu1/rhAw/cM3e+mTNn3vOe90zd8UA7vAZvw3E4Egdid2yF/zknYl98Db/Cfwrcj6vwMbwQjykn4V24Db35PlyGT+Kd6Cj2wMvwJhyPL+Nn6PkH8UPsiU3O5bgOvdGXOBHbYiqd8QX8He3om3gWNgkPoKP1M96DjmRjOQdnoJ3cgUc1msaaT+2oLcXzMI/TcAhORkfmFZyAZ2KMG/B7dERv9UBjeAnt3Nt4sgeq8NjTuBs9T/9EJ4Z//4DO5paYxwW4Ff/C6zxQCw+iN3kHT/BAFafgEvScOXg9tkFx5HvjJvT/P+JwzKMDfo4+5MUeSMG48Kl8rXYkj0fRm98bWvnY4RG4EY05Z3YenfA39IGae6AIJ4Cz1QkRizlf7S/4cWiVYyzuxNWhlY8j7AP74IWMRk+8O7Ty6YOe46qRyrPob4pSiw/8B54bWjkYO8aDea4olQxGb3Z1aKUxCv3NFaGVj6HlOVNDKweXL0+4L7TijEXP6xJaaQxFf3NVaMUx7r/DvKxRNx1NyNlsjGHq8Ga1pIaH0d9cFFpxXEo978bQqmI7mjrKcNnzIlYtqbyFxlfuyDTAysgZb36toD16Uxf+Mlrg3/hiaKVhXKc8vGzB5Yf+PIyViB10ySrDImEPfhJa5ZiMHZUFoVXOe7jr0J+HsVyygykz08I0GicRsmUzlvgb8jweca45zYPdQqsYF3rPTRntjLnoctYstIp5HL1+69CqJ5s9ToAyLONNBa6xgzxQgrFqAWHRkcJTaF/OCK16bkcPmgtTsAB1uXN2FmHC90FcJYrKr4a8igewokixVLeDlump+NqcLEWVtWHgde8IrTQWoimvgtPR12Awp2JJ5ex8F/OWxvPxW/RmKZNDHDXDx73LEaxBc1AtuG46Qg+FViWLcC+awlK5BL3epNCq4gn0n8ZXKhaZ/sYSv5plaC1YC25Po33oiP5zWmil4YViHZyPVkepGCaGw/rQivARGvjuvlK4Be2gFU41H6CFr5uqFFzbvZYpL8qVaOC/EVpxTkVnvB2wWq5IqvX0Q2/4KbpnydvbZPgQ3+AXWDqhZqKdHBBalVgDPofmNm/uV4OiunAM+kY8dzO6x7ZiqcZ86jm+kVLORjfVv+KlaGxYEW9AL6IWCsOwqPLOMFwMfq/pb01n72NWvN6PHi9L+hX0QjfVBvla9ALmJ9fJsqIzhlsKU45vyF2jb2ke2mFnu2FTE/3RCtvOufw05ac0N+3ZvtlBsCRrFDejMWQ17HeZokBPxTV5Nto53050F5eKcegK4wUX47XYGKzEzZdfo9fyO07NrzWG31cMdEfSi69Ec5+vqgjrP7eTU9B12d+aSkxBxwT3Ls+gJbk3Uz8AmZRfRyeR/5+FlvhZOlIngh8GUguHo8LdmfFpTlyBP2HWEXWGumy5Mj2CXfF/xxhzRfHzhinleKCu7l+4UxydSgvFkgAAAABJRU5ErkJggg==">
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    },
  },
};
</script>

<style scoped>
.st0{fill:#4c4c4c;}

.capsule {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  width: 100vw;
  height: 60px;
  background: white;
}

ul {
  padding-left: 0;
  display: flex;
  list-style: none outside none;
  justify-content: center;
  align-items: center;
}

li {
  padding: 0 50px;
}

a,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

.cartitem {
  position: relative;
  float: right;
}

.cartcount {
  font-family: 'Barlow', sans-serif;
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  margin: -5px 0 0 20px;
  border-radius: 1000px;
  font-weight: 700;
}
</style>
