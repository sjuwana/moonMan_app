import React, { Component } from 'react'
import { getItemById } from '../services/items';
import Layout from '../components/shared/Layout'

class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        title: '',
        link: ''
      },
      wishlist: []
      //do we need wishlist here?  the array is passed as props from Container.
    }
  }

  async componentDidMount() {
    this.wishList()
    try {

    } catch (error) {

    }
  }


  wishList = async () => {
    await Promise.all(this.props.user.items.map(async (wishitem, index) => {
      try {
        const wishItem = await getItemById(wishitem);
        console.log(wishItem)
        this.setState(prevState => ({ wishlist: [...prevState.wishlist, wishItem] }));
      } catch (err) {
        console.error(err);
      }

    }))
  }

  wishList = async () => {
    this.props.user.items.map(async (wishitem, index) => {
      try {
        const wishItem = await getItemById(wishitem);
        console.log(wishItem)
        this.setState(prevState => ({ wishlist: [...prevState.wishlist, wishItem] }));
      } catch (err) {
        console.error(err);
      }
    })
  }



  renderButton = (itemId) => {
    console.log(itemId)
    const { history, match, user, deleteItemFromWishlist } = this.props
    const { wishlist } = this.state
    if (user) {
      return (
        <>
          <button onClick={() => { deleteItemFromWishlist(itemId); this.removeItem(itemId) }}>
            Remove Item
                      </button>
        </>
      )
    } else {
      return null
    }
  }

  removeItem = (itemId) => {
    const newWishlist = this.state.wishlist.filter((item) => item._id.toString() !== itemId.toString())
    this.setState({ wishlist: newWishlist })
  }


  render() {
    // console.log(this.props.user.items[0])
    return (
      <div>
        <Layout>
          <div className="wish">
            <h1 className="wishy-title">Wishlist</h1>
            <div id="wishlist-display">
              {
                this.state.wishlist.length > 0 && this.state.wishlist.map(wishItem => (
                  <div className="wishitem-info">
                    <div className="wishlist-result">
                      <h3>{wishItem.title}</h3>
                      <h2>{wishItem.link}</h2>
                      {this.renderButton(wishItem._id)}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}


export default Wishlist