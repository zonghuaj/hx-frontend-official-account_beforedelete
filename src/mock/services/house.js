import Mock from 'mockjs';

const article = (options) => {
  const data = {
    'status': 1,
    'data': [
      {
        'houseId': 32,
        'companyId': 1,
        'companyName': '沈阳浑南热力有限责任公司',
        'companyAbbreviationName': '浑南热力',
        'regionId': 1,
        'regionName': '政发小区',
        'buildingId': 1,
        'buildingCode': '120003001',
        'buildingName': '1#',
        'customerId': 32,
        'maskCustomerName': '**云',
        'areas': [
          {
            'areaId': 32,
            'houseId': 32,
            'userType': '民公建',
            'superArea': 0,
            'propertyArea': 62,
            'outPropertyArea': 0,
            'chargeArea': 62
          }
        ],
        'cardCode': '12003064',
        'houseCode': '12003064',
        'houseUnit': '网点',
        'houseFloor': '01',
        'houseNumber': '1#网',
        'streetAddress': '东陵区浑河堡西街48号',
        'hotAddress': '东陵区浑河堡西街48号1网',
        'active': true,
        'chargeSystemHouseId': '8E32E379CFF9EDB4E050007F01007020',
        'isWhiteList': 0,
        'bindId': 379002,
        'relationLabel': '非',
        'isDefault': 1
      },
      {
        'houseId': 22251,
        'companyId': 1,
        'companyName': '沈阳浑南热力有限责任公司',
        'companyAbbreviationName': '浑南热力',
        'regionId': 17,
        'regionName': '亿丰不夜城（地上部分公建）',
        'buildingId': 300,
        'buildingCode': '120177001',
        'buildingName': '亿丰不夜城（地上部分）',
        'customerId': 22251,
        'maskCustomerName': '无',
        'areas': [
          {
            'areaId': 22251,
            'houseId': 22251,
            'userType': '民公建',
            'superArea': 47.05,
            'propertyArea': 117.63,
            'outPropertyArea': 0,
            'chargeArea': 164.68
          }
        ],
        'cardCode': '12192746',
        'houseCode': '12192746',
        'houseUnit': '01',
        'houseFloor': '03',
        'houseNumber': '002',
        'streetAddress': '东陵区金卡路18号',
        'hotAddress': '东陵区金卡路18号302',
        'active': true,
        'chargeSystemHouseId': '8E32E373438DEDB4E050007F01007020',
        'isWhiteList': 0,
        'bindId': 512898,
        'relationLabel': '我家',
        'isDefault': 0
      },
      {
        'houseId': 132260,
        'companyId': 1,
        'companyName': '沈阳浑南热力有限责任公司',
        'companyAbbreviationName': '浑南热力',
        'regionId': 124,
        'regionName': '金地锦城',
        'buildingId': 2323,
        'buildingCode': '120167039',
        'buildingName': '45#',
        'customerId': 132260,
        'maskCustomerName': '**宸',
        'areas': [
          {
            'areaId': 132260,
            'houseId': 132260,
            'userType': '住宅',
            'superArea': 0,
            'propertyArea': 163.13,
            'outPropertyArea': 140.93,
            'chargeArea': 304.06
          }
        ],
        'cardCode': '12180488',
        'houseCode': '12180488',
        'houseUnit': '01',
        'houseFloor': '01',
        'houseNumber': '002',
        'streetAddress': '浑南区高科路24-5号',
        'hotAddress': '浑南区高科路24-5号112',
        'active': true,
        'chargeSystemHouseId': '8E32E373B673EDB4E050007F01007020',
        'isWhiteList': 0,
        'bindId': 511824,
        'relationLabel': '宸',
        'isDefault': 0
      },
      {
        'houseId': 2,
        'companyId': 1,
        'companyName': '沈阳浑南热力有限责任公司',
        'companyAbbreviationName': '浑南热力',
        'regionId': 1,
        'regionName': '政发小区',
        'buildingId': 1,
        'buildingCode': '120003001',
        'buildingName': '1#',
        'customerId': 2,
        'maskCustomerName': '**新',
        'areas': [
          {
            'areaId': 2,
            'houseId': 2,
            'userType': '住宅',
            'superArea': 0,
            'propertyArea': 119.68,
            'outPropertyArea': 0,
            'chargeArea': 119.68
          }
        ],
        'cardCode': '12002607',
        'houseCode': '12002607',
        'houseUnit': '02',
        'houseFloor': '01',
        'houseNumber': '002',
        'streetAddress': '浑南新区沈营路16号',
        'hotAddress': '浑南新区沈营路16号212',
        'active': true,
        'chargeSystemHouseId': '8E32E377A98FEDB4E050007F01007020',
        'isWhiteList': 0,
        'bindId': 510370,
        'relationLabel': '新',
        'isDefault': 0
      },
      {
        'houseId': 437455,
        'companyId': 4,
        'companyName': '沈阳沈水湾清洁能源有限公司',
        'companyAbbreviationName': '沈水湾',
        'regionId': 376,
        'regionName': '新世界花园.御景',
        'buildingId': 6985,
        'buildingCode': '619020181',
        'buildingName': '5#',
        'customerId': 437455,
        'maskCustomerName': '*阳',
        'areas': [
          {
            'areaId': 437455,
            'houseId': 437455,
            'userType': '住宅',
            'superArea': 0,
            'propertyArea': 163.88,
            'outPropertyArea': 0,
            'chargeArea': 163.88
          }
        ],
        'cardCode': '61049701',
        'houseCode': '61049701',
        'houseUnit': '01',
        'houseFloor': '24',
        'houseNumber': '003',
        'streetAddress': '和平区南三好街9-22号',
        'hotAddress': '和平区南三好街9-22号 5#1-24-3',
        'active': true,
        'chargeSystemHouseId': '8DFDD96C6EAE959FE050007F01001EE9',
        'isWhiteList': 0,
        'bindId': 391876,
        'relationLabel': '阳',
        'isDefault': 0
      },
      {
        'houseId': 120612,
        'companyId': 1,
        'companyName': '沈阳浑南热力有限责任公司',
        'companyAbbreviationName': '浑南热力',
        'regionId': 113,
        'regionName': '河畔新城(四期)',
        'buildingId': 2178,
        'buildingCode': '120063005',
        'buildingName': '416#',
        'customerId': 120612,
        'maskCustomerName': '**明',
        'areas': [
          {
            'areaId': 120612,
            'houseId': 120612,
            'userType': '住宅',
            'superArea': 0,
            'propertyArea': 97.35,
            'outPropertyArea': 0,
            'chargeArea': 97.35
          }
        ],
        'cardCode': '12049744',
        'houseCode': '12049744',
        'houseUnit': '01',
        'houseFloor': '02',
        'houseNumber': '001',
        'streetAddress': '浑南新区朗云街8-416号',
        'hotAddress': '浑南新区朗云街8-416号121',
        'active': true,
        'chargeSystemHouseId': '8E32E376D4B3EDB4E050007F01007020',
        'isWhiteList': 0,
        'bindId': 379089,
        'relationLabel': '发票',
        'isDefault': 0
      },
      {
        'houseId': 356408,
        'companyId': 3,
        'companyName': '沈阳新北热电有限责任公司',
        'companyAbbreviationName': '新北热电',
        'regionId': 253,
        'regionName': '华润紫云府',
        'buildingId': 5625,
        'buildingCode': '119108159',
        'buildingName': '34#',
        'customerId': 356408,
        'maskCustomerName': '**霖',
        'areas': [
          {
            'areaId': 356408,
            'houseId': 356408,
            'userType': '住宅',
            'superArea': 0,
            'propertyArea': 114.04,
            'outPropertyArea': 0,
            'chargeArea': 114.04
          }
        ],
        'cardCode': '11076375',
        'houseCode': '11076375',
        'houseUnit': '03',
        'houseFloor': '06',
        'houseNumber': '001',
        'streetAddress': '皇姑区鸭绿江东街6-34号',
        'hotAddress': '皇姑区鸭绿江东街6-34号34#361',
        'active': true,
        'chargeSystemHouseId': '8DF2D22DB6686C42E050007F01000ED6',
        'isWhiteList': 0,
        'bindId': 378989,
        'relationLabel': '住宅',
        'isDefault': 0
      }
    ]
  };

  return data;
};
// /basic/house/binding
Mock.mock(/\/basic\/house\/binding/, 'get', article);
