(function () {
'use strict';

// *      Developed by Roman Strutynskyi *//

// =============================================
// Modules navigation
// =============================================

// 1.

// =========================================
// Configuration
// =========================================
var Config = {
  siteName: 'Perfect application',
  developer: 'Roman Strutynskyi'
};

var Comment = {
  init: function init(json) {
    var commentWrap = document.createElement('div');
    commentWrap.className = "comment card";
    //
    var head = document.createElement('div');
    head.className = "comment__head card-header";
    // 
    var name = document.createElement('h5');
    name.className = "comment__name card-title";
    name.dataset.comment = json.id;
    name.innerHTML = json.name;
    // 
    var mail = document.createElement('a');
    mail.className = "comment__email card-subtitle text-muted ";
    mail.setAttribute('href', 'mailto:' + json.email);
    mail.innerHTML = json.email;
    //
    var body = document.createElement('div');
    body.className = "comment__body card-body";
    body.innerHTML = json.body;
    //
    head.appendChild(name);
    head.appendChild(mail);
    commentWrap.appendChild(head);
    commentWrap.appendChild(body);
    return commentWrap;
  }
};

var Article = {
  init: function init(json) {
    var articleWrap = document.createElement('div');
    articleWrap.className = "article card";
    //
    var head = document.createElement('div');
    head.className = "article__head card-header";
    // 
    var title = document.createElement('h4');
    title.className = "article__title js-post card-title";
    title.dataset.post = json.id;
    title.innerHTML = json.title;
    // 
    var user = document.createElement('h5');
    user.className = "article__user js-user card-subtitle text-muted";
    user.dataset.user = json.userId;
    user.innerHTML = 'user' + json.userId;
    //
    var body = document.createElement('div');
    body.className = "article__body card-body";
    body.innerHTML = json.body;
    //
    head.appendChild(title);
    head.appendChild(user);
    articleWrap.appendChild(head);
    articleWrap.appendChild(body);
    return articleWrap;
  }
};

var Task1 = {
  // tag:{
  //   body:'body'
  // },
  init: function init() {
    var self = this;
    document.addEventListener("DOMContentLoaded", this.getJson('posts'));
    this.openPost(self);
    this.openUser(self);
  },
  getJson: function getJson(link) {
    var _this = this;

    var comment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (comment) {
      fetch("https://jsonplaceholder.typicode.com/" + link).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this.listComments(json);
      });
    } else {
      fetch("https://jsonplaceholder.typicode.com/" + link).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this.listArticles(json);
      });
    }
  },
  listArticles: function listArticles(json) {
    var container = document.createElement('div');
    container.className = "container";
    document.body.innerHTML = "";
    if ($(json).length > 1) {
      json.forEach(function (element) {
        container.appendChild(Article.init(element));
      });
      document.body.appendChild(container);
    } else {
      container.appendChild(Article.init(json));
      document.body.appendChild(container);
    }
  },
  listComments: function listComments(json) {
    var comments = document.createElement('div');
    comments.className = "comments";
    var title = document.createElement('h2');
    title.innerHTML = 'Comments';
    comments.appendChild(title);
    if ($(json).length > 1) {
      json.forEach(function (element) {
        comments.appendChild(Comment.init(element));
      });
      document.querySelector(".container").appendChild(comments);
    } else {
      comments.appendChild(Comment.init(json));
      document.querySelector(".container").appendChild(comments);
    }
  },
  openPost: function openPost(self) {
    $(document).on("click", '.js-post', function () {
      var postId = $(this).data('post');
      self.getJson("posts/" + postId);
      setTimeout(function () {
        self.getJson("posts/" + postId + "/comments", true);
      }, 100);
    });
  },
  openUser: function openUser(self) {
    $(document).on("click", '.js-user', function () {
      var userId = $(this).data('user');
      var json = self.getJson("posts?userId=" + userId);
    });
  }
};

var Task2 = {
  id: {
    root: 'root'
  },
  React: {
    createElement: function createElement(tag) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var item = document.createElement(tag);
      var keys = Object.keys(props === null ? {} : props);

      if (keys.length) keys.forEach(function (key) {
        if (key == 'style') {
          typeof props[key] === 'string' ? item[key] = props[key] : Object.keys(props[key]).forEach(function (style) {
            return item.style[style] = props.style[style];
          });
        } else {
          item[key] = props[key];
        }
      });

      var append = function append(child) {
        return typeof child === 'string' ? item.appendChild(document.createTextNode(child)) : item.appendChild(child);
      };

      if (children) [].concat(children).forEach(function (child) {
        return append(child);
      });
      return item;
    },
    render: function render(component, container) {
      container.appendChild(component);
    }
  },
  init: function init() {
    var app = this.React.createElement('div', { style: { backgroundColor: 'red' } }, [this.React.createElement('span', undefined, 'Hello world'), this.React.createElement('br'), 'This is just a text node', this.React.createElement('div', { textContent: 'Text content' })]);
    this.React.render(app, document.getElementById(this.id.root));
  }
};

console.log(Config);
// =========================================
// Initialization
// =========================================
// Module1.init();
var currentPage = $('body').data('page');
if (Object.is(currentPage, 'task1')) Task1.init();
if (Object.is(currentPage, 'task2')) Task2.init();

}());
