class Products {
  int? id;
  String? name;
  int? price;
  String? description;
  int? stock;
  String? image;
  List<String>? colors;
  String? createdAt;
  String? updatedAt; 
  List<Categories>? categories;
  List<Brands>? brands;

  Products(
      {this.id,
      this.name,
      this.price,
      this.description,
      this.stock,
      this.image,
      this.colors,
      this.createdAt,
      this.updatedAt,
      this.categories,
      this.brands});

  Products.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    price = json['price'];
    description = json['description'];
    stock = json['stock'];
    image = json['image'];
    colors = json['colors'].cast<String>();
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    if (json['categories'] != null) {
      categories = <Categories>[];
      json['categories'].forEach((v) {
        categories!.add(new Categories.fromJson(v));
      });
    }
    if (json['brands'] != null) {
      brands = <Brands>[];
      json['brands'].forEach((v) {
        brands!.add(new Brands.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['price'] = this.price;
    data['description'] = this.description;
    data['stock'] = this.stock;
    data['image'] = this.image;
    data['colors'] = this.colors;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    if (this.categories != null) {
      data['categories'] = this.categories!.map((v) => v.toJson()).toList();
    }
    if (this.brands != null) {
      data['brands'] = this.brands!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Categories {
  int? id;
  String? name;
  String? createdAt;
  String? updatedAt;
  Categoryproduct? categoryproduct;

  Categories(
      {this.id,
      this.name,
      this.createdAt,
      this.updatedAt,
      this.categoryproduct});

  Categories.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    categoryproduct = json['categoryproduct'] != null
        ? new Categoryproduct.fromJson(json['categoryproduct'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    if (this.categoryproduct != null) {
      data['categoryproduct'] = this.categoryproduct!.toJson();
    }
    return data;
  }
}

class Categoryproduct {
  int? productId;
  int? categoryId;
  String? createdAt;
  String? updatedAt;

  Categoryproduct(
      {this.productId, this.categoryId, this.createdAt, this.updatedAt});

  Categoryproduct.fromJson(Map<String, dynamic> json) {
    productId = json['productId'];
    categoryId = json['categoryId'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['productId'] = this.productId;
    data['categoryId'] = this.categoryId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}

class Brands {
  int? id;
  String? name;
  String? image;
  String? createdAt;
  String? updatedAt;
  Brandproduct? brandproduct;

  Brands(
      {this.id,
      this.name,
      this.image,
      this.createdAt,
      this.updatedAt,
      this.brandproduct});

  Brands.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    image = json['image'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    brandproduct = json['brandproduct'] != null
        ? new Brandproduct.fromJson(json['brandproduct'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['image'] = this.image;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    if (this.brandproduct != null) {
      data['brandproduct'] = this.brandproduct!.toJson();
    }
    return data;
  }
}

class Brandproduct {
  int? productId;
  int? brandId;
  String? createdAt;
  String? updatedAt;

  Brandproduct({this.productId, this.brandId, this.createdAt, this.updatedAt});

  Brandproduct.fromJson(Map<String, dynamic> json) {
    productId = json['productId'];
    brandId = json['brandId'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['productId'] = this.productId;
    data['brandId'] = this.brandId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}