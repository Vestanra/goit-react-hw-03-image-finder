import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "service/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { LineWave } from 'react-loader-spinner';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout.styled";
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    loadMore: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page} = this.state;
    const checkQuery = this.getQeury()
    if (checkQuery.trim() === '') {
      toast.error("Please enter the text to search")
      return
    }
    if (query !== prevState.query || page !== prevState.page) {
      const fetchQuery = this.getQeury();
      try {
        this.setState({loading: true})
        const newImages = await fetchImages(fetchQuery, page);
        if (newImages.total === 0) {
          toast.error(`No images for the search "${checkQuery}". Try again.`);                
        }
        this.setState(prev => ({
          images: [...prev.images, ...newImages.hits],
          totalImages: newImages.totalHits,
          loadMore: newImages.totalHits > page * 12
        }))
    } catch(error) {
        toast.error(`Opps...`)
    } finally {
        this.setState({ loading: false });
    }
    }
  }

  getQeury = () => {
    const part = this.state.query.split('/');
    return part[part.length - 1];
  }
 
  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    this.setState({
      query: `${Date.now()}/${query}`,
      images: [],
      page: 1,
    });
  }

  render() {
    const { images, loadMore, loading, page} = this.state;
    return (
      <Layout>
        <Searchbar
          onSubmit={this.handleSubmit}
          loading={loading} />
        {loading === true && page === 1 && <LineWave width="100%" color = '#5c5c8a'/>}
        {images.length > 0 && <ImageGallery items={images} />}
        {(images.length > 0) && loadMore &&
          <Button
            onClick={this.handleLoadMore}
            loading={loading} />}
        <Toaster position="bottom-center"/>
        <GlobalStyle/>
      </Layout>
     )
   }
}
