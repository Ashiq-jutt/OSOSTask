import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyButton from '../components/MyButton';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from '../redux/features/Cart';
import styles from './styles';

const CartScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cart = useSelector(state => state?.cart?.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api.escuelajs.co/api/v1/products',
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const openProductModal = product => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeProductModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
    closeProductModal();
  };

  const renderProduct = ({item}) => {
    const cartItem = cart?.find(cartItem => cartItem.id === item.id);
    return (
      <TouchableOpacity
        onPress={() => openProductModal(item)}
        style={styles.itemContainer}>
        <Image source={{uri: item?.images[0]}} style={styles.img} />
        <View style={{width: '60%', justifyContent: 'space-between'}}>
          <Text numberOfLines={2} style={styles.itemTitle}>
            {item?.title}
          </Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.itemPrice}>Rs. {item.price}</Text>
            {cartItem?.quantity >= 1 && (
              <View style={styles.cartActions}>
                <TouchableOpacity
                  onPress={() => dispatch(decrementQuantity(item.id))}>
                  <Text style={styles.incdecbtn}>-</Text>
                </TouchableOpacity>
                <Text>{cartItem?.quantity}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(incrementQuantity(item.id))}>
                  <Text style={styles.incdecbtn}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Text style={styles.itemTitle}>Category: {item?.category?.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size="small" color={'#80D9E1'} />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Shopping</Text>
          </View>
          <View style={{}}>
            <FlatList
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 120,
              }}
              showsVerticalScrollIndicator={false}
              data={products}
              renderItem={renderProduct}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <Modal
            visible={modalVisible}
            transparent
            onRequestClose={closeProductModal}>
            <View style={styles.modalContainer}>
              {selectedProduct && (
                <>
                  <Image
                    source={{uri: selectedProduct?.images[0]}}
                    style={styles.productImage}
                  />
                  <View style={styles.descriptionStyle}>
                    <Text style={styles.modalPrice}>{'Description:'}</Text>
                    <Text style={styles.modalDescription}>
                      {selectedProduct?.description}
                    </Text>
                  </View>
                  <View style={styles.closeContainer}>
                    <MyButton
                      containerStyle={{width: '40%', backgroundColor: 'red'}}
                      textStyle={{color: 'white'}}
                      title="Add to Cart"
                      onPress={handleAddToCart}
                    />
                    <MyButton
                      containerStyle={{width: '30%', backgroundColor: 'gray'}}
                      title="Close"
                      onPress={closeProductModal}
                    />
                  </View>
                </>
              )}
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

export default CartScreen;
