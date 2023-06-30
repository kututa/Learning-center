<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-purple">
    <div class="container">
      <a class="navbar-brand" href="#"><h5>vue.js</h5></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav " >
          <li class="nav-item ">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="icons"><a href=""> <i class="fas fa-user ml-auto"></i></a>
</div>
  </nav>
  

<!-- END OF NAVBAR SECTION  -->
<div class="landing-page">
    <header class="hero text-center py-5">
      <h1>Welcome to Your Learning Platform</h1>
      <p>Unlock your potential with our wide range of courses</p>
      <a href="#courses" class="btn btn-primary">Register now</a>
    </header>

    <section id="courses" class="courses-section py-5">
  <div class="container">
    <h2 class="text-center mb-4">Popular Courses</h2>
    <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../images/pngwing.com-removebg-preview.png" alt="Slide 1" class="d-block w-100" />
          <div class="carousel-caption">
            <h3 class="courses">VUE</h3>
            <p class="descreption">The Vue course is designed to introduce participants to the Vue.js framework, a progressive JavaScript framework used for building user interfaces. This course aims to provide a comprehensive understanding of Vue.js, starting from the basics and gradually progressing to more advanced concepts.

</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../images/pngwing.com__1_-removebg-preview (1).png" alt="Slide 2" class="d-block w-100" />
          <div class="carousel-caption">
            <h3 class="courses">BOOTSTRAP</h3>
            <p class="descreption">The Bootstrap course is designed to teach participants how to effectively use the Bootstrap framework to build responsive and visually appealing websites and web applications. Bootstrap is a popular front-end framework that provides a set of pre-built components, CSS styles, and JavaScript plugins to streamline the web development process.

</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../images/pngwing.com__3_-removebg-preview.png" alt="Slide 3" class="d-block w-100" />
          <div class="carousel-caption">
            <h3 class="courses">REACT</h3>
            <p  class="descreption ">The React course is designed to provide participants with a comprehensive understanding of the React library for building modern and interactive user interfaces. React is a popular JavaScript library used to develop reusable UI components and create dynamic web applications.

</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-3877.jpg?size=626&ext=jpg&ga=GA1.2.268582255.1686923702&semt=ais" alt="Slide 4" class="d-block w-100" />
          <div class="carousel-caption">
            <h3 class="courses">HTML5, CSS3, JAVASCRIPT</h3>
            <p class="descreption">The HTML, CSS, and JavaScript course is designed to provide participants with a solid foundation in web development. HTML, CSS, and JavaScript are the core technologies used to create and style web pages, add interactivity, and enhance the user experience.

</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#imageCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#imageCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</section>




    <section class="features-section py-5" style="box-shadow: 0 0 10px purple ; ">   
      <div class="container">
        <h2 class="text-center mb-4" style="color: crimson;">Key Features</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body text-center ">
              <h class="h">  <i class="fas fa-video fa-3x mb-3"></i></h>
                <h3 class="card-title">Interactive Video Lessons</h3>
                <p class="card-text">Engage with high-quality video lessons that make learning enjoyable.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body text-center">
              <h class="h">  <i class="fas fa-user-graduate fa-3x mb-3"></i></h>
                <h3 class="card-title">Expert Instructors</h3>
                <p class="card-text">Learn from industry experts and experienced instructors.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body text-center">
              <h class="h">  <i class="fas fa-certificate fa-3x mb-3"></i></h>
                <h3 class="card-title">Certificates of Completion</h3>
                <p class="card-text">Earn certificates upon successful completion of courses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <!-- modal start  -->
    <section class="cta-section text-center py-5">
      <h2>Start Your Learning Journey Today</h2>
      <p>Join thousands of learners already benefiting from our platform.</p>
      <a href="#courses" class="btn btn-primary" @click="openModal">Explore Courses</a>
    </section>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>Course Catalog</h3>
        <!-- Course catalog content goes here -->
        <div>
    <section class="cta-section text-center py-5">
      <h2>Start Your Learning Journey Today</h2>
      <p>Join thousands of learners already benefiting from our platform.</p>
      <a href="#courses" class="btn btn-primary" @click="openModal">Explore Courses</a>
    </section>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>Course Catalog</h3>

        <!-- Search and filtering options -->
        <div>
          <input type="text" v-model="searchQuery" placeholder="Search courses...">
          <select v-model="selectedCategory">
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Project Management">Project Management</option>
            <option value="Networking Fundamentals">Networking Fundamentals</option>
            <option value="System Design and Architecture">System Design and Architecture</option>
            <!-- <option value="Design"></option> -->

          </select>
        </div>

        <!-- Course catalog content -->
        <div class="course-card" v-for="course in filteredCourses" :key="course.id">
          <h4>{{ course.title }}</h4>
          <p>{{ course.description }}</p>
          <p>Instructor: {{ course.instructor }}</p>
          <p>Duration: {{ course.duration }}</p>
          <p>Rating: {{ course.rating }}</p>
          <p>Enrollment Status: {{ course.enrollmentStatus }}</p>
        </div>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>  
    <!-- Additional sections can be added as needed -->
  </div>
<!-- courses  -->

<div class="container" >
    <h1>Course Title</h1>
    <p>VUE J.S</p>

    <h2>Instructor</h2>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Kututa Vincent</h5>
        <p class="card-text">Kututa Vincent is an experienced web developer specializing in Vue.js. He has been working in the industry for over 10 years and has a deep understanding of front-end development. John is passionate about teaching and has conducted numerous workshops and training sessions on Vue.js for aspiring developers. His teaching style focuses on practical examples and hands-on exercises to help students grasp the concepts effectively. In addition to his teaching role, kututa actively contributes to the Vue.js open-source community and has published several Vue.js tutorials and articles.</p>

      </div>
    </div>

    <h2>Syllabus</h2>
    <ul class="list-group" >
      <li class="list-group-item" style="box-shadow: 0 0 10px purple ; ">Lesson 1: Introduction to vue.js</li>
      <li class="list-group-item">Lesson 2: Vue.js Basics</li>
      <li class="list-group-item">Lesson 3:Components in Vue.js</li>
      <li class="list-group-item">Lesson 4: Routing in Vue.js</li>
      <li class="list-group-item">Lesson 5: State Management with Vuex</li>
      <li class="list-group-item">Lesson 6: Advanced Topics</li>

    </ul>

    <h2>Lesson Content</h2>
<div class="row">
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 1: Introduction to Vue.js</span> 
        <br>
        1. What is Vue.js and its features<br>
        2. Advantages of using Vue.js<br>
        3. Setting up a Vue.js project<br>
        4. Creating your first Vue instance<br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 2: Vue Instance and Data Binding</span>
        <br>
        1. Understanding the Vue instance lifecycle<br>
        2. Data binding and interpolation<br>
        3. Two-way data binding using v-model<br>
        4. Computed properties and watchers<br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 3: Directives and Conditional Rendering</span>
        <br>
        1. Understanding directives in Vue.js<br>
        2. Using v-if and v-show for conditional rendering<br>
        3. Looping through data with v-for<br>
        4. Handling events with v-on<br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 4: Components and Reusability</span>
        <br>
        1. Introduction to Vue components<br>
        2. Creating and using components<br>
        3. Passing data between components using props<br>
        4. Emitting events from child components<br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 5: Forms and User Input<br></span>
        
        1.Working with forms in Vue.js<br>

            2.Form validation and handling user input<br>

            3.Using computed properties for form data manipulation<br>

            4.Custom form input components<br>
            <br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 6: Vue Router and Navigation<br></span>
        
        1. Introduction to Vue components<br>
        2.Configuring routes and navigation<br>
        3.Route parameters and dynamic routes<br>
        4.Navigation guards for authentication and authorization<br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 7: State Management with Vuex<br></span>
        
        1.Overview of state management in Vue.js<br>
        2.Setting up Vuex for centralized state management<br>
        3.Mutations, actions, and getters in Vuex<br>
        4. Organizing Vuex modules for complex applications<br>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card mb-4 bg-white shadow">
      <div class="card-body">
        <span>Lesson 8: Advanced Vue.js Topics<br></span>
        
        1.Server-side rendering (SSR) with Vue.js<br>
        2.Using Vue CLI for project setup and development<br>
        3.Testing Vue components<br>
        4.Best practices and optimization techniques

</div>
    </div>
  </div>
</div>
<div class="container mb-4">
  <a href="#courses" class="btn btn-primary">Expore more Courses</a>
</div>
<!-- Repeat the same structure for the remaining lessons -->
      </div>
    <!-- </div>

  </div>
   -->
  
</template>


<script>

export default {
  data() {
    return {
      isModalOpen: false,
      searchQuery: '',
      selectedCategory: '',
      courses: [
        {
          id: 1,
          title: 'Web Development 101',
          description: 'Learn the basics of web development.',
          instructor: 'Vincent kututa',
          duration: '4 weeks',
          rating: 4.5,
          enrollmentStatus: 'Open',
          category: 'Web Development'
        },
        {
          id: 2,
          title: 'Data Science Fundamentals',
          description: 'Explore the world of data science and analytics.',
          instructor: 'Leon munyao',
          duration: '6 weeks',
          rating: 4.7,
          enrollmentStatus: 'Closed',
          category: 'Data Science'
        },
       
        {
          id: 3,
          title: 'UI/UX Design Principles',
          description: 'Master the principles of user interface and user experience design.',
          instructor: 'Jerry Joseph',
          duration: '8 weeks',
          rating: 4.8,
          enrollmentStatus: 'Open',
          category: 'Design'
        },
        {
        id: 4,
        title: 'Project Management Essentials',
        description: 'Learn the fundamentals of project management and effective team collaboration.',
        instructor: 'Roy Kinoti',
        duration: '6 weeks',
        rating: 4.7,
        enrollmentStatus: 'Open',
        category: 'Project Management'
      },
      {
        id: 5,
        title: 'Networking Fundamentals',
        description: 'Discover the basics of computer networking and network administration.',
        instructor: 'Fredy Webule',
        duration: '5 weeks',
        rating: 4.3,
        enrollmentStatus: 'Open',
        category: 'Networking Fundamentals'
      },
      {
        id: 6,
        title: 'System Design and Architecture',
        description: 'Learn about designing scalable and efficient software systems.',
        instructor: 'Collins Ruto',
        duration: '8 weeks',
        rating: 4.6,
        enrollmentStatus: 'Open',
        category: 'System Design and Architecture'
      },

      ]
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => {
        const matchesSearchQuery = course.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = !this.selectedCategory || course.category === this.selectedCategory;
        return matchesSearchQuery && matchesCategory;
      });
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  
};

  
</script>





<style scoped>
.navbar {
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(128, 0, 128, 0.4);

  
}

.navbar-nav .nav-link {
  color: purple;
  position: relative;
  transition: color 0.3s;
}

.navbar-nav .nav-link:hover {
  color: crimson;
}

.navbar-nav .nav-link:hover::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: crimson;
}
.navbar-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin: 10px;
  text-align: center;
  
}

a {
  text-decoration: none;
  color:purple;
}



.shadow-purple {
  transition: box-shadow 0.3s;
}

.shadow-purple:hover {
  box-shadow: 0 4px 6px rgba(128, 0, 128, 0.4);
}
</style>
 <!--  
END OF SECTION -->


