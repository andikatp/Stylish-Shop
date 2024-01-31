import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import '../controllers/search_page_controller.dart';

// ignore: must_be_immutable
class SearchPageView extends GetView<SearchPageController> {
  final SearchPageController searchController = Get.put(SearchPageController());
  TextEditingController textController = TextEditingController();
  SearchPageView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    searchController.searchProducts(textController.text);
    return Scaffold(
      appBar: AppBar(
        title: TextField(
          autofocus: true,
          controller: textController,
          onTapOutside: (_) => FocusScope.of(context).unfocus(),
          onChanged: (text) {
            searchController.searchProducts(text);
          },
          decoration: InputDecoration(
            prefixIcon: const Icon(Icons.search),
            hintText: 'Search...',
            contentPadding: EdgeInsets.zero,
            fillColor: const Color(0xffF3F4F5),
            filled: true,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(15),
            ),
          ),
        ),
        centerTitle: true,
      ),
      body: Obx(
        () {
          if (searchController.isLoading.value) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (searchController.products.isEmpty) {
            return const Center(
              child: Text('No results found.'),
            );
          }
          if (textController.text.isEmpty) {
            return const Center(
              child: Text('Type something to search'),
            );
          }
          return Padding(
            padding: const EdgeInsets.all(10.0),
            child: GridView.builder(
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 300,
                childAspectRatio: 1,
                crossAxisSpacing: 1,
                mainAxisSpacing: 10,
              ),
              itemCount: searchController.products.length,
              itemBuilder: (context, index) {
                final product = searchController.products[index];

                return InkWell(
                  onTap: () => controller.goToDetail(product),
                  child: Container(
                    alignment: Alignment.center,
                    decoration:
                        BoxDecoration(borderRadius: BorderRadius.circular(10)),
                    child: Column(
                      children: [
                        Container(
                          decoration: BoxDecoration(
                              color: const Color.fromRGBO(219, 219, 219, 100),
                              borderRadius: BorderRadius.circular(10)),
                          child: Image.network(
                            'https://storage.googleapis.com/${product.image!}',
                            width: 132,
                            height: 132,
                          ),
                        ),
                        Text(
                          product.name!,
                          style: const TextStyle(
                              fontSize: 15, fontWeight: FontWeight.w700),
                        ),
                        Text(
                          limitWord(product.description!),
                          style: const TextStyle(fontSize: 12),
                        ),
                        Text(
                          NumberFormat.currency(
                                  locale: 'id', symbol: 'Rp ', decimalDigits: 0)
                              .format(product.price!),
                          style: const TextStyle(
                              fontSize: 15, fontWeight: FontWeight.w700),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}

String limitWord(String text) {
  List<String> words = text.split(' ');

  if (words.length <= 3) {
    return text;
  } else {
    return '${words.take(3).join(' ')}...';
  }
}
