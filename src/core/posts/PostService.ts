import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import store from "../../redux/store";
import { IPost } from "./IPost";
import { IPostDTO } from "./IPostDTO";

export default class PostService {
  [x: string]: any;
  private userUri: string = import.meta.env.VITE_API_ENDPOINT_USERS_POSTS;
  private adminUri: string = import.meta.env.VITE_API_ENDPOINT_ADMIN_POSTS;

  async fetchPosts(): Promise<IPost[]> {
    console.log("Begin fetchPosts");
    console.log("Fetching posts...");
    try {
      const isAuthenticated = store.getState().login.isLoggedIn;
      console.log("isAuthenticated:", isAuthenticated);
      const token = sessionStorage.getItem("accessToken");
      console.log("token:", token);
      console.log("Headers:", {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      });
      const response: AxiosResponse<IPost[]> = await axios.get<IPost[]>(
        this.userUri,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("Response Data:", response.data);
      console.log(
        `Posts fetched successfully. Data: ${JSON.stringify(response.data)}`
      );
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching posts: ${error.message}`);
      throw new Error(`Error fetching posts: ${error.message}`);
    } finally {
      console.log("End fetchPosts");
    }
  }

  // async fetchPostById(id: number): Promise<IPost> {
  //   console.log(`Fetching post by id: ${id}`);
  //   try {
  //     const response: AxiosResponse = await axios.get(`${this.userUri}/${id}`);
  //     console.log(`Post by id: ${id} fetched successfully.`);
  //     return response.data;
  //   } catch (error: any) {
  //     console.error(`Error fetching post by id: ${error.message}`);
  //     throw new Error(`Error fetching post by id: ${error.message}`);
  //   }
  // }

  async fetchPostById(id: number): Promise<IPost> {
    try {
      const response: AxiosResponse<IPost> = await axios.get<IPost>(
        `${this.userUri}/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching post by id: ${error.message}`);
      throw new Error(`Error fetching post by id: ${error.message}`);
    }
  }

  async createPost(newPost: IPostDTO): Promise<IPost> {
    console.log("Creating post...");
    console.log("newPost:", newPost);
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    };

    try {
      console.log("Sending POST request to:", this.adminUri);
      console.log("Request body:", newPost);
      console.log("Request headers:", config.headers);
      const response: AxiosResponse<IPost> = await axios.post<IPost>(
        `${this.adminUri}`,

        newPost,
        config
      );
      console.log(this.adminUri);
      console.log("Response:", response);
      console.log("Post created successfully.");
      return response.data;
    } catch (error: any) {
      console.error(`Error creating post: ${error.message}`);
      console.error("Error details:", error);
      throw new Error(`Error creating post: ${error.message}`);
    }
  }

  async deletePost(id: number): Promise<void> {
    console.log(`Attempting to delete post by id: ${id}`);
    console.log(`Deleting post by id: ${id}`);
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    };

    try {
      console.log(`Sending DELETE request to: ${this.adminUri}/${id}`);
      console.log(`Request headers:`, config.headers);
      await axios.delete(`${this.adminUri}/${id}`, config);
      console.log(`Post by id: ${id} deleted successfully.`);
    } catch (error: any) {
      console.error(`Error deleting post: ${error.message}`);
      console.error(`Error details:`, error);
      throw new Error(`Error deleting post: ${error.message}`);
    }
  }

  async updatePost(post: IPostDTO, id: number): Promise<IPost> {
    console.log(`Updating post by id: ${id}`);
    console.log("Post DTO:", post);
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    };

    try {
      console.log("Sending PUT request to:", `${this.adminUri}/${id}`);
      console.log("Request body:", post);
      console.log("Request headers:", config.headers);
      const response: AxiosResponse = await axios.put(
        `${this.adminUri}/${id}`,
        post,
        config
      );
      console.log("Response:", response);
      console.log(`Post by id: ${id} updated successfully.`);
      return response.data;
    } catch (error: any) {
      console.error(`Error updating post: ${error.message}`);
      console.error("Error details:", error);
      throw new Error(`Error updating post: ${error.message}`);
    }
  }
}
