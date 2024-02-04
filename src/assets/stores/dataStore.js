import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
 text: [
   {
     id: 1,
     title: 'Tea',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
     image_path: '/assets/img/example/childcascos.png',
   },
    // {
    //     id: 2,
    //     title: 'Tea',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 3,
    //     title: 'Tea',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 4,
    //     title: 'Tdh/tda',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 5,
    //     title: 'Tdh/tda',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 6,
    //     title: 'Tdh/tda',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 7,
    //     title: 'Transtorno Madurativo',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 8,
    //     title: 'Transtorno Madurativo',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 9,
    //     title: 'Transtorno Madurativo',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 10,
    //     title: 'Transtorno Aprendizaje',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 11,
    //     title: 'Transtorno Aprendizaje',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 12,
    //     title: 'Transtorno Aprendizaje',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 13,
    //     title: 'Neurodiversidad',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 14,
    //     title: 'Neurodiversidad',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 15,
    //     title: 'Neurodiversidad',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 16,
    //     title: 'Servicios',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 17,
    //     title: 'Servicios',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 18,
    //     title: 'Servicios',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 19,
    //     title: 'Ágora',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 20,
    //     title: 'Ágora',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
    //   {
    //     id: 21,
    //     title: 'Ágora',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, magna at convallis egestas, mi sapien euismod libero, eget ornare urna mauris quis dui. Nam vel pretium dolor. Sed tellus tortor, dignissim vitae tincidunt a, posuere nec diam. Proin rutrum, urna id aliquet placerat, nisi nibh vestibulum nisl, at consequat nisi sem et lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc gravida ut augue vel porttitor. Morbi lobortis tincidunt orci, in porta justo tincidunt vitae. Donec laoreet luctus euismod. Vestibulum vel dolor id orci faucibus mattis et eu tellus. Aenean sed velit a purus iaculis fringilla eget sit amet purus. Morbi iaculis metus sem, a varius velit consectetur at. Vivamus sed dolor ac nisl tristique congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //     path: '/public/img/neuronsInteraction.jpg',
    //   },
  ],
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
     addText: (state, action) => {
       state.text.push(action.payload);
     },
  },
 });
 
 
 
 export default textSlice.reducer;