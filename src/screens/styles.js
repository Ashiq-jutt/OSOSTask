import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 8,
    gap: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  desriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
  },
  itemPrice: {
    marginTop: 4,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingCount: {
    fontWeight: 'bold',
    color: '#ddd',
  },
  incdecbtn: {
    fontWeight: 'bold',
    color: '#000',
  },
  modalContainer: {
    marginTop: 180,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
  },
  descriptionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-start',
    gap: 5,
    marginBottom: 10,
  },
  closeContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 110,
    resizeMode: 'center',
    borderRadius: 5,
  },
  productImage: {
    alignSelf: 'center',
    width: 100,
    height: 110,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 12,
  },
  modalPrice: {
    fontSize: 12,
    color: 'black',
  },
  modalDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
    width: 215,
  },
  headerContainer: {
    backgroundColor: '#80D9E1',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    gap: 10,
  },
  cartActions: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'center',
    width: '35%',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    borderRadius: 3,
  },
});
export default styles;
