/// <reference no-default-lib="true"/>
/// <reference path="lua.d.ts" />
/// <reference path="macro_math.d.ts" />
/// <reference path="generated/enums.d.ts" />
/// <reference path="generated/None.d.ts" />
/// <reference types="@rbxts/compiler-types" />

// ROBLOX API
/**
 * Intersecting a type with this allows access to Roblox's `Instance.Changed` event.
 *
 * @example
 * function f(p: Part) {
 * 	(p as Part & ChangedSignal).Changed.Connect(changedPropertyName => {})
 * }
 */
type ChangedSignal = {
	/**
	 * If you want to detect changes of a single property only, you should use [Instance.GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal) instead!
	 *
	 * The Changed event fires right after most properties change on objects. It is possible to find the present value of a changed property by using `object[property]`. To get the value of a property before it changes, you must have stored the value of the property before it changed.
	 *
	 * If you are only interested in listening to the change of a specific property, consider using the `GetPropertyChangedSignal` method instead to get an event that only fires when a given property changes.
	 *
	 * This event does not fire for physics-related changes, like when the `CFrame`, `Velocity`, `RotVelocity`, `Position`, `Orientation` and `CFrame` properties of a `BasePart` change due to gravity. To detect changes in these properties, consider using a physics-based event like `RunService.Stepped` or `BasePart.Touched`. A while-true-do loop can also work.
	 *
	 * For "-Value" objects, this event behaves differently: it only fires when the `Value` property changes. See individual pages for `IntValue`, `StringValue`, etc for more information. To detect other changes in these objects, you must use `GetPropertyChangedSignal` instead.
	 */
	readonly Changed: RBXScriptSignal<(changedPropertyName: string) => void>;
};

type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;

type ContentId = string;
type BinaryString = string;
type SharedString = string;
type ProtectedString = string;

interface EmoteDictionary {
	/** When these arrays have more than one emote id in them, it will randomly select one of the emotes to play from the list. */
	[emoteName: string]: Array<number>;
}

type EquippedEmotes = Array<{ Name: string; Slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }>;

interface UserInfo {
	Id: number;
	Username: string;
	DisplayName: string;
	HasVerifiedBadge: boolean;
}

interface GroupInfo {
	Name: string;
	Id: number;
	Owner: {
		Name: string;
		Id: number;
	};
	EmblemUrl: string;
	Description: string;
	Roles: Array<{
		Name: string;
		Rank: number;
	}>;
}

interface GetGroupsAsyncResult {
	Name: string;
	Id: number;
	EmblemUrl: string;
	Description: string;
	Rank: number;
	Role: string;
	IsPrimary: boolean;
	IsInClan: boolean;
}

type HttpHeaders = Record<string, string> | Map<string, string>;
interface RequestAsyncRequest {
	Url: string;
	Method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";
	Body?: string;
	Headers?: HttpHeaders;
	Compress?: Enum.HttpCompression;
}

interface RequestAsyncResponse {
	Success: boolean;
	StatusCode: number;
	StatusMessage: string;
	Headers: Record<string, string>;
	Body: string;
}

interface SetInfo {
	AssetSetId: string;
	CategoryId: string;
	CreatorName: string;
	Description: string;
	ImageAssetId: string;
	Name: string;
	SetType: string;
}

interface CollectionInfo {
	AssetId: string;
	AssetSetId: string;
	AssetVersionId: string;
	IsTrusted: boolean;
	Name: string;
	CreatorName: string;
}

interface BaseAccessoryInfo {
	AssetId: number;
	AccessoryType: Enum.AccessoryType;
}
interface RigidAccessoryInfo extends BaseAccessoryInfo {
	IsLayered: false;
}
interface LayeredAccessoryInfo extends BaseAccessoryInfo {
	IsLayered: true;
	Order: number;
	Puffiness?: number;
}
type AccessoryInfo = RigidAccessoryInfo | LayeredAccessoryInfo;

interface FreeSearchResult {
	CurrentStartIndex: string;
	Results: Array<{
		AssetId: string;
		AssetVersionId: string;
		CreatorName: string;
		Name: string;
	}>;
	TotalCount: string;
}

interface LocalizationEntry {
	Key: string;
	Source: string;
	Context: string;
	Example: string;
	Values: Map<string, string>;
}

interface LogInfo {
	message: string;
	messageType: Enum.MessageType;
	timestamp: number;
}

interface ReceiptInfo {
	/** the id of the player making the purchase */
	PlayerId: number;
	/** the specific place where the purchase was made */
	PlaceIdWherePurchased: number;
	/** a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase */
	PurchaseId: string;
	/** the id of the purchased product */
	ProductId: number;
	/** the type of currency used (Tix, Robux) */
	CurrencyType: Enum.CurrencyType;
	/** the amount of currency spent on the product for this purchase */
	CurrencySpent: number;
}

interface ProductInfo {
	/** The name shown on the asset's page */
	Name: string;
	/** The description as shown on the asset's page; May be `undefined` if the description is empty. */
	Description: string | undefined;
	/** The cost of purchasing the asset using Robux */
	PriceInRobux: number | undefined;
	/** Timestamp of when the asset was created, e.g. `2018-08-01T17:55:11.98Z` */
	Created: string;
	/** Timestamp of when the asset was last updated by its creator, e.g. `2018-08-01T17:55:11.98Z` */
	Updated: string;
	/** Describes whether the asset is purchasable */
	IsForSale: boolean;
	/** The number of items the asset has been sold */
	Sales: number | undefined;
	ProductId: number;
	/** A table of information describing the creator of the asset */
	Creator: {
		/** Either `User` or `Group` */
		CreatorType: "User" | "Group" | undefined;
		/** The ID of the creator user or group */
		CreatorTargetId: number;
		/** The name/username of the creator */
		Name: string | undefined;
	};
	TargetId: number;
}

interface AssetProductInfo extends ProductInfo {
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "User Product";
	/** If InfoType was Asset, this is the ID of the given asset. */
	AssetId: number;
	/** The [type of asset](https://developer.roblox.com/articles/Asset-types) (e.g. place, model, shirt). In TypeScript, you should compare this value to a member of the `AssetTypeId` const enum. */
	AssetTypeId: AssetTypeId;
	/** Describes whether the asset is marked as "new" in the catalog */
	IsNew: boolean;
	/** Describes whether the asset is a "limited item" that is no longer (if ever) sold */
	IsLimited: boolean;
	/** Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold */
	IsLimitedUnique: boolean;
	/** Describes whether the asset can be taken for free */
	IsPublicDomain: boolean;
	/** The remaining number of items a limited unique item may be sold */
	Remaining: number | undefined;
	/** Indicates whether the item is marked as 13+ in catalog */
	ContentRatingTypeId: number;
	/** The minimum Builder's Club subscription necessary to purchase the item */
	MinimumMembershipLevel: number;
}

interface DeveloperProductInfo extends ProductInfo {
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "Developer Product";
	IconImageAssetId: number;
}

interface GamePassProductInfo extends ProductInfo {
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "Game Pass";
	IconImageAssetId: number;
}

interface SubscriptionProductInfo extends ProductInfo {
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "Subscription";
}

interface BadgeInfo {
	/** The name of the badge. */
	Name: string;
	/** The description of the badge. */
	Description: string;
	/** The asset ID of the image for this badge. */
	IconImageId: number;
	/** Indicates whether this badge is available to be awarded. */
	IsEnabled: boolean;
}

interface BundleInfo {
	/** What kind of Bundle this is */
	BundleType: "BodyParts" | "AvatarAnimations";

	/** The Description of the Bundle */
	Description: string;

	/** The Bundle Id */
	Id: number;

	/** An array of all assets contained within this bundle */
	Items: Array<{
		/** The Id of the individual item */
		Id: number;
		/** The name of the individual asset */
		Name: string;
		/** What type the individual asset is */
		Type: "Asset" | "UserOutfit";
	}>;

	/** The name of the Bundle */
	Name: string;
}

type TeleportData = string | number | boolean | Array<unknown> | Map<unknown, unknown>;

interface GameJoinContext {
	JoinSource: Enum.JoinSource;
	ItemType?: Enum.AvatarItemType;
	AssetId?: string;
	OutfitId?: string;
	AssetType?: Enum.AssetType;
}

interface PlayerJoinInfo {
	/** The `DataModel.GameId` of the experience the `Player` teleported from. Only present if the player teleports to the current experience and if a server calls the teleport function. */
	SourceGameId?: number;
	/** The `DataModel.PlaceId` of the place the `Player` teleported from. Only present if the player teleports to the current place and a server calls the teleport function. */
	SourcePlaceId?: number;
	/** The `Player.UserId` of the player who invited the current player to the experience. Use this data to identify the referrer and trigger reward logic. */
	ReferredByPlayerId?: number;
	/** An array containing the `UserId` numbers of the users teleported alongside the `Player`. Only present if the player teleported as part of a group. */
	Members?: Array<number>;
	/** Reflects the `teleportData` specified in the original teleport. Useful for sharing information between servers the player teleports to. Only present if `teleportData` was specified and a server calls the teleport function. */
	TeleportData?: TeleportData;
	/** A string containing launch data specified in the URL the player clicks to join the experience. Only present if the URL contains launch data. */
	LaunchData?: string;
	/** A dictionary that includes relevant information based on the context of the game join. */
	GameJoinContext?: GameJoinContext;
}

interface BoundActionInfo {
	/** Describes whether a touch button should be created on TouchEnabled devices */
	createTouchButton: boolean;
	/** The description of action set by SetDescription */
	description?: string;
	/** The title of the action set by SetTitle */
	title?: string;
	/** The image of the action's touch button set by SetImage */
	image?: string;
	/** The input types passed to BindAction for which this action will trigger */
	inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType | string>;
	/** Describes the priority level of the action.
	 * Priority level will still be included even if `BindActionAtPriority` wasn't used - by default it will be 2000.
	 */
	priorityLevel: number;
	/** Describes the index of the action on the stack (increasing) */
	stackOrder: number;
}

declare const enum AssetTypeId {
	Image = 1,
	TShirt = 2,
	Audio = 3,
	Mesh = 4,
	Lua = 5,
	Hat = 8,
	Place = 9,
	Model = 10,
	Shirt = 11,
	Pants = 12,
	Decal = 13,
	Head = 17,
	Face = 18,
	Gear = 19,
	Badge = 21,
	Animation = 24,
	Torso = 27,
	RightArm = 28,
	LeftArm = 29,
	LeftLeg = 30,
	RightLeg = 31,
	Package = 32,
	GamePass = 34,
	Plugin = 38,
	MeshPart = 40,
	HairAccessory = 41,
	FaceAccessory = 42,
	NeckAccessory = 43,
	ShoulderAccessory = 44,
	FrontAccessory = 45,
	BackAccessory = 46,
	WaistAccessory = 47,
	ClimbAnimation = 48,
	DeathAnimation = 49,
	FallAnimation = 50,
	IdleAnimation = 51,
	JumpAnimation = 52,
	RunAnimation = 53,
	SwimAnimation = 54,
	WalkAnimation = 55,
	PoseAnimation = 56,
	EarAccessory = 57,
	EyeAccessory = 58,
	EmoteAnimation = 61,
	Video = 62,
	TShirtAccessory = 64,
	ShirtAccessory = 65,
	PantsAccessory = 66,
	JacketAccessory = 67,
	SweaterAccessory = 68,
	ShortsAccessory = 69,
	LeftShoeAccessory = 70,
	RightShoeAccessory = 71,
	DressSkirtAccessory = 72,
	FontFamily = 73,
	EyebrowAccessory = 76,
	EyelashAccessory = 77,
	MoodAnimation = 78,
	DynamicHead = 79,
}

interface AgentParameters {
	/** Humanoid radius. Used to determine the minimum separation from obstacles. */
	AgentRadius?: number;
	/** Humanoid height.
	 * Empty space smaller than this value, like the space under stairs, will be marked as non-traversable.
	 */
	AgentHeight?: number;
	/** Sets whether off-mesh links for jumping are allowed. */
	AgentCanJump?: boolean;
	/** Determines whether climbing `TrussParts` during pathfinding is allowed. */
	AgentCanClimb?: boolean;
	/** Determines the spacing between intermediate waypoints in path. */
	WaypointSpacing?: number;
	/** Table of materials or defined PathfindingModifiers and their "cost" for traversal. Useful for making the agent prefer certain materials/regions over others. */
	Costs?: { [K in Enum.Material["Name"]]?: number } & { [index: string]: number };
}

interface CollisionGroupInfo {
	mask: number;
	name: string;
}

declare const enum LocationType {
	MobileWebsite = 0,
	MobileInGame = 1,
	Website = 2,
	Studio = 3,
	InGame = 4,
	XBoxApp = 5,
	TeamCreate = 6,
}

interface FriendOnlineInfoBase {
	/** The UserId of the friend. */
	VisitorId: number;
	/** The user name of the friend. */
	UserName: string;
	/** The display name of the friend. */
	DisplayName: string;
	/** When the user was last online. */
	LastOnline: string;
	/** If the friend is currently online. */
	IsOnline: boolean;
	/** The name of the friends current location. */
	LastLocation: string;
}

interface FriendOnlineInfoWebsite extends FriendOnlineInfoBase {
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType.MobileWebsite | LocationType.Website | LocationType.XBoxApp;
}

interface FriendOnlineInfoGame extends FriendOnlineInfoBase {
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType.MobileInGame | LocationType.InGame | LocationType.TeamCreate;
	/** The placeId of the friends last location. Check the `LocationType` to determine whether this property exists. */
	PlaceId: number;
	/** The DataModel / JobId of the friends last location.
	 * Check the `LocationType` to determine whether this property exists.
	 */
	GameId: string;
}

interface FriendOnlineInfoStudio extends FriendOnlineInfoBase {
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType.Studio;
	/** The placeId of the friends last location. Check the `LocationType` to determine whether this property exists. */
	PlaceId: number;
}

type FriendOnlineInfo = FriendOnlineInfoWebsite | FriendOnlineInfoGame | FriendOnlineInfoStudio;

/** A dictionary of an id and name containing information about what type an asset is */
type AssetType =
	| { id: AssetTypeId.Image; name: "Image" }
	| { id: AssetTypeId.TShirt; name: "TeeShirt" }
	| { id: AssetTypeId.Audio; name: "Audio" }
	| { id: AssetTypeId.Mesh; name: "Mesh" }
	| { id: AssetTypeId.Lua; name: "Lua" }
	| { id: AssetTypeId.Hat; name: "Hat" }
	| { id: AssetTypeId.Place; name: "Place" }
	| { id: AssetTypeId.Model; name: "Model" }
	| { id: AssetTypeId.Shirt; name: "Shirt" }
	| { id: AssetTypeId.Pants; name: "Pants" }
	| { id: AssetTypeId.Decal; name: "Decal" }
	| { id: AssetTypeId.Head; name: "Head" }
	| { id: AssetTypeId.Face; name: "Face" }
	| { id: AssetTypeId.Gear; name: "Gear" }
	| { id: AssetTypeId.Badge; name: "Badge" }
	| { id: AssetTypeId.Animation; name: "Animation" }
	| { id: AssetTypeId.Torso; name: "Torso" }
	| { id: AssetTypeId.RightArm; name: "RightArm" }
	| { id: AssetTypeId.LeftArm; name: "LeftArm" }
	| { id: AssetTypeId.LeftLeg; name: "LeftLeg" }
	| { id: AssetTypeId.RightLeg; name: "RightLeg" }
	| { id: AssetTypeId.Package; name: "Package" }
	| { id: AssetTypeId.GamePass; name: "GamePass" }
	| { id: AssetTypeId.Plugin; name: "Plugin" }
	| { id: AssetTypeId.MeshPart; name: "MeshPart" }
	| { id: AssetTypeId.HairAccessory; name: "HairAccessory" }
	| { id: AssetTypeId.FaceAccessory; name: "FaceAccessory" }
	| { id: AssetTypeId.NeckAccessory; name: "NeckAccessory" }
	| { id: AssetTypeId.ShoulderAccessory; name: "ShoulderAccessory" }
	| { id: AssetTypeId.FrontAccessory; name: "FrontAccessory" }
	| { id: AssetTypeId.BackAccessory; name: "BackAccessory" }
	| { id: AssetTypeId.WaistAccessory; name: "WaistAccessory" }
	| { id: AssetTypeId.ClimbAnimation; name: "ClimbAnimation" }
	| { id: AssetTypeId.DeathAnimation; name: "DeathAnimation" }
	| { id: AssetTypeId.FallAnimation; name: "FallAnimation" }
	| { id: AssetTypeId.IdleAnimation; name: "IdleAnimation" }
	| { id: AssetTypeId.JumpAnimation; name: "JumpAnimation" }
	| { id: AssetTypeId.RunAnimation; name: "RunAnimation" }
	| { id: AssetTypeId.SwimAnimation; name: "SwimAnimation" }
	| { id: AssetTypeId.WalkAnimation; name: "WalkAnimation" }
	| { id: AssetTypeId.PoseAnimation; name: "PoseAnimation" }
	| { id: AssetTypeId.EarAccessory; name: "EarAccessory" }
	| { id: AssetTypeId.EyeAccessory; name: "EyeAccessory" };

/** Information about a player's avatar in dictionary form */
interface CharacterAppearanceInfo {
	/** Describes the BrickColor values for each limb */
	bodyColors: {
		/** The BrickColor value of the leftArm */
		leftArmColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the torso */
		torsoColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the rightArm */
		rightArmColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the head */
		headColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the leftLeg */
		leftLegColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the rightLeg */
		rightLegColorId: keyof BrickColorsByNumber;
	};

	/** The assets currently equipped by the Player (hats, body parts, etc, excluding gear) */
	assets: Array<{
		/** The asset ID of the equipped asset */
		id: number;

		/** A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.). In TypeScript, the `id` can be compared to a member of the `AssetTypeId` const enum. */
		assetType: AssetType;

		/** The name of the equipped asset */
		name: string;
	}>;

	/** Describes whether default pants are applied */
	defaultPantsApplied: boolean;

	/** Describes whether default shirt are applied */
	defaultShirtApplied: boolean;

	/** What kind of avatar it is */
	playerAvatarType: "R6" | "R15";

	/** A dictionary of scaling properties */
	scales: {
		bodyType: number;
		head: number;
		height: number;
		proportion: number;
		depth: number;
		width: number;
	};
}

interface MakeSystemMessageConfig {
	Text: string;
	Color?: Color3;
	Font?: Enum.Font;
	TextSize?: number;
}

interface SendNotificationConfig {
	Title: string;
	Text: string;
	Icon?: string;
	Duration?: number;
	Callback?: BindableFunction;
	Button1?: string;
	Button2?: string;
}

interface PolicyInfo {
	/** When true, the player might see immersive ads within an experience. */
	AreAdsAllowed: boolean;
	/** When true, the player cannot interact with paid (via in-experience currency or Robux) random item generators. */
	ArePaidRandomItemsRestricted: boolean;
	/** A list of external link references (for example, social media links, handles, or iconography) a player is permitted to see. Possible values include: “Discord”, “Facebook”, “Twitch”, and “YouTube”. */
	AllowedExternalLinkReferences: Array<string>;
	/** When true, the player is eligible to purchase subscriptions within an experience. */
	IsEligibleToPurchaseSubscription: boolean;
	/** When true, the player can trade virtual items that they purchased with in-experience currency or Robux. */
	IsPaidItemTradingAllowed: boolean;
	/** When true, an experience should enforce compliance changes. See [here](https://devforum.roblox.com/t/about-our-upcoming-global-compliance-system/461447) for details. */
	IsSubjectToChinaPolicies: boolean;
}

interface AvatarRulesBodyColorsPalette {
	HexColor: string;
	Name: string;
	BrickColorId: number;
}

interface AvatarRules {
	BodyColorsPalette: ReadonlyArray<AvatarRulesBodyColorsPalette>;
	BundlesEnabledForUser: boolean;
	MinimumDeltaEBodyColorDifference: number;
	WearableAssetTypes: ReadonlyArray<{
		Id: number;
		MaxNumber: number;
		Name: string;
	}>;
	ProportionsAndBodyTypeEnabledForUser: boolean;
	PlayerAvatarTypes: ReadonlyArray<string>;
	Scales: {
		BodyType: {
			Max: number;
			Increment: number;
			Min: number;
		};
		Head: {
			Max: number;
			Increment: number;
			Min: number;
		};
		Height: {
			Max: number;
			Increment: number;
			Min: number;
		};
		Proportion: {
			Max: number;
			Increment: number;
			Min: number;
		};
		Width: {
			Max: number;
			Increment: number;
			Min: number;
		};
	};
	DefaultClothingAssetLists: {
		DefaultPantAssetIds: ReadonlyArray<number>;
		DefaultShirtAssetIds: ReadonlyArray<number>;
	};
	EmotesEnabledForUser: boolean;
	BasicBodyColorsPalette: ReadonlyArray<AvatarRulesBodyColorsPalette>;
}

interface ItemDetailsBase {
	CreatorHasVerifiedBadge: boolean;
	Genres: ReadonlyArray<Enum.Genre["Name"]>;
	Price: number;
	Owned: boolean;
	ProductId: number;
	ItemRestrictions: ReadonlyArray<string>;
	ItemStatus: ReadonlyArray<string>;
	SaleLocationType: string;
	FavoriteCount: number;
	Id: number;
	Name: string;
	Description: string;
	IsPurchasable: boolean;
	LowestPrice?: number;
	LowestResalePrice?: number;
	CreatorTargetId: number;
	CreatorName: string;
	CreatorType: string;
	ExpectedSellerId: number;
}

interface AssetItemDetails extends ItemDetailsBase {
	ItemType: "Asset";
	AssetType: Enum.AssetType["Name"];
}

interface BundleItemDetails extends ItemDetailsBase {
	ItemType: "Bundle";
	BundleType: Enum.BundleType["Name"];
	BundledItems: ReadonlyArray<{
		Owned: boolean;
		Id: number;
		Name: string;
		Type: "Asset" | "UserOutfit";
	}>;
}

type ItemDetails = AssetItemDetails | BundleItemDetails;

interface RecommendedAsset {
	Item: {
		AssetId: number;
		Name: string;
		Price: number;
		PremiumPrice: number;
		AbsoluteUrl: string;
		AudioUrl: string;
	};
	Creator: {
		CreatorId: number;
		CreatorType: string;
		Name: string;
		CreatorProfileLink: string;
	};
	Product: {
		Id: number;
		PriceInRobux: number;
		IsForSale: boolean;
		IsPublicDomain: boolean;
		IsResellable: boolean;
		IsLimited: boolean;
		IsLimitedUnique: boolean;
		SerialNumber: number;
		IsRental: boolean;
		RentalDurationInHours: number;
		BcRequirement: number;
		TotalPrivateSales: number;
		SellerId: number;
		SellerName: string;
		LowestPrivateSaleUserAssetId: number;
		IsXboxExclusiveItem: boolean;
		OffsaleDeadline: string;
		NoPriceText: string;
		IsFree: boolean;
	};
}

interface RecommendedBundle {
	Id: number;
	Name: string;
	Description: string;
	BundleType: string;
	Items: ReadonlyArray<{
		Owned: boolean;
		Id: number;
		Name: string;
		Type: string;
	}>;
	Creator: {
		Id: number;
		Name: string;
		Type: string;
	};
	Product: {
		Id: number;
		Type: string;
		IsPublicDomain: boolean;
		IsForSale: boolean;
		PriceInRobux: number;
		PremiumPricing: {
			PremiumDiscountPercentage: number;
			PremiumPriceInRobux: number;
		};
	};
}

interface SearchCatalogResultBase {
	Id: number;
	Name: string;
	Description: string;
	ProductId: number;
	Genres: ReadonlyArray<Enum.Genre["Name"]>;
	ItemStatus: ReadonlyArray<string>;
	ItemRestrictions: ReadonlyArray<string>;
	CreatorType: "User" | "Group";
	CreatorTargetId: number;
	CreatorName: string;
	Price: number;
	PremiumPricing: {
		PremiumDiscountPercentage: number;
		PremiumPriceInRobux: number;
	};
	LowestPrice: number;
	PriceStatus?: string;
	UnitsAvailableForConsumption: number;
	PurchaseCount: number;
	FavoriteCount: number;
	SaleLocationType: string;
	CreatorHasVerifiedBadge: boolean;
}

interface SearchCatalogAssetResult extends SearchCatalogResultBase {
	ItemType: "Asset";
	AssetType: Enum.AssetType["Name"];
}

interface SearchCatalogBundleResult extends SearchCatalogResultBase {
	ItemType: "Bundle";
	BundleType: Enum.BundleType["Name"];
	BundledItems: ReadonlyArray<{
		Owned: boolean;
		Id: number;
		Name: string;
		Type: "Asset" | "UserOutfit";
	}>;
}

type SearchCatalogResult = SearchCatalogAssetResult | SearchCatalogBundleResult;

/**
 * RBXScriptConnection, also known as a Connection,
 * is a special object returned by the Connect method of an Event (RBXScriptSignal).
 * This is used primarily to disconnect a listener from an Event.
 */
interface RBXScriptConnection {
	/**
	 * Describes whether or not the connection is still alive.
	 * This will become false if connection:Disconnect() is called.
	 */
	Connected: boolean;
	/** Disconnects the connection from the event. */
	Disconnect(this: RBXScriptConnection): void;
}

/**
 * RBXScriptSignal, more commonly known as an Event, is a special kind of Roblox object.
 * It provides a way for user-defined functions, called listeners, to be called when something happens in the game.
 * When a certain event happens, the Event is fired, calling any listeners that are connected to the Event.
 * An Event may also pass arguments to each listener, to provide extra information about the event that occurred.
 */
interface RBXScriptSignal<T extends Callback = Callback> {
	/**
	 * Establishes a function to be called whenever the event is raised.
	 * Returns a RBXScriptConnection object associated with the connection.
	 * @param callback The function to be called whenever the event is fired.
	 */
	Connect(this: RBXScriptSignal, callback: T): RBXScriptConnection;

	ConnectParallel(this: RBXScriptSignal, callback: T): RBXScriptConnection;

	Once(this: RBXScriptSignal, callback: T): RBXScriptConnection;

	/**
	 * Yields the current thread until this signal is fired. Returns what was fired to the signal.
	 */
	Wait(this: RBXScriptSignal): LuaTuple<Parameters<T>>;
}

// generated in generated/None.d.ts
interface Instances {}
interface CreatableInstances {}

// InstanceConstructor
interface InstanceConstructor {
	/**
	 * Creates an new object of type val. The parent argument is optional;
	 * If it is supplied, the object will be parented to that object.
	 * Performance note: When the Parent of an object is set,
	 * Roblox begins listening to a variety of different property changes for replication,
	 * rendering and physics.
	 * Therefore, it is recommended to set the Parent property last when creating new objects.
	 * As such, you should avoid using the second argument (parent) of this function.
	 * You can read [this thread on the developer forum](https://devforum.roblox.com/t/psa-dont-use-instance-new-with-parent-argument/30296) for more information.
	 */
	new <T extends keyof CreatableInstances>(className: T, parent?: Instance): CreatableInstances[T];
	/**
	 * Creates a new object with the same type and property values as an existing object. In most cases using `Instance:Clone()` is more appropriate, but this constructor is useful when implementing low‑level libraries or systems.
	 *
	 * There are two behavioral differences between this constructor and the `Instance:Clone()` method:
	 * - This constructor will not copy any of the descendant `Instances` parented to the existing object.
	 * - This constructor will return a new object even if the existing object had `Instance.Archivable` set to `false`.
	 */
	fromExisting: <T extends Instance>(existingInstance: T) => T;
}

declare const Instance: InstanceConstructor;

// AdReward
interface AdReward {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_AdReward: unique symbol;
}

/**
 * Axes is a datatype used for the ArcHandles class to control what rotation axes are currently enabled.
 */
interface Axes {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Axes: unique symbol;
	/** Whether the X axis is enabled */
	readonly X: boolean;
	/** Whether the Y axis is enabled */
	readonly Y: boolean;
	/** Whether the Z axis is enabled */
	readonly Z: boolean;
	/** Whether the top face is included */
	readonly Top: boolean;
	/** Whether the bottom face is included */
	readonly Bottom: boolean;
	/** Whether the left face is included */
	readonly Left: boolean;
	/** Whether the right face is included */
	readonly Right: boolean;
	/** Whether the back face is included */
	readonly Back: boolean;
	/** Whether the front face is included */
	readonly Front: boolean;
}

type AxesConstructor = new (...axes: Array<Enum.Axis | Enum.NormalId>) => Axes;
declare const Axes: AxesConstructor;

interface BrickColor<T extends keyof BrickColorsByNumber = keyof BrickColorsByNumber> {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_BrickColor: unique symbol;
	/** The unique number that identifies the BrickColor */
	readonly Number: T;
	/** The name associated with the BrickColor */
	readonly Name: BrickColorsByNumber[T];
	/** The Color3 associated with the BrickColor */
	readonly Color: Color3;
	/** The red component (between 0 and 1) */
	readonly r: number;
	/** The green component (between 0 and 1) */
	readonly g: number;
	/** The blue component (between 0 and 1) */
	readonly b: number;
}

interface BrickColorsByNumber {
	1: "White";
	2: "Grey";
	3: "Light yellow";
	5: "Brick yellow";
	6: "Light green (Mint)";
	9: "Light reddish violet";
	11: "Pastel Blue";
	12: "Light orange brown";
	18: "Nougat";
	21: "Bright red";
	22: "Med. reddish violet";
	23: "Bright blue";
	24: "Bright yellow";
	25: "Earth orange";
	26: "Black";
	27: "Dark grey";
	28: "Dark green";
	29: "Medium green";
	36: "Lig. Yellowich orange";
	37: "Bright green";
	38: "Dark orange";
	39: "Light bluish violet";
	40: "Transparent";
	41: "Tr. Red";
	42: "Tr. Lg blue";
	43: "Tr. Blue";
	44: "Tr. Yellow";
	45: "Light blue";
	47: "Tr. Flu. Reddish orange";
	48: "Tr. Green";
	49: "Tr. Flu. Green";
	50: "Phosph. White";
	100: "Light red";
	101: "Medium red";
	102: "Medium blue";
	103: "Light grey";
	104: "Bright violet";
	105: "Br. yellowish orange";
	106: "Bright orange";
	107: "Bright bluish green";
	108: "Earth yellow";
	110: "Bright bluish violet";
	111: "Tr. Brown";
	112: "Medium bluish violet";
	113: "Tr. Medi. reddish violet";
	115: "Med. yellowish green";
	116: "Med. bluish green";
	118: "Light bluish green";
	119: "Br. yellowish green";
	120: "Lig. yellowish green";
	121: "Med. yellowish orange";
	123: "Br. reddish orange";
	124: "Bright reddish violet";
	125: "Light orange";
	126: "Tr. Bright bluish violet";
	127: "Gold";
	128: "Dark nougat";
	131: "Silver";
	133: "Neon orange";
	134: "Neon green";
	135: "Sand blue";
	136: "Sand violet";
	137: "Medium orange";
	138: "Sand yellow";
	140: "Earth blue";
	141: "Earth green";
	143: "Tr. Flu. Blue";
	145: "Sand blue metallic";
	146: "Sand violet metallic";
	147: "Sand yellow metallic";
	148: "Dark grey metallic";
	149: "Black metallic";
	150: "Light grey metallic";
	151: "Sand green";
	153: "Sand red";
	154: "Dark red";
	157: "Tr. Flu. Yellow";
	158: "Tr. Flu. Red";
	168: "Gun metallic";
	176: "Red flip/flop";
	178: "Yellow flip/flop";
	179: "Silver flip/flop";
	180: "Curry";
	190: "Fire Yellow";
	191: "Flame yellowish orange";
	192: "Reddish brown";
	193: "Flame reddish orange";
	194: "Medium stone grey";
	195: "Royal blue";
	196: "Dark Royal blue";
	198: "Bright reddish lilac";
	199: "Dark stone grey";
	200: "Lemon metalic";
	208: "Light stone grey";
	209: "Dark Curry";
	210: "Faded green";
	211: "Turquoise";
	212: "Light Royal blue";
	213: "Medium Royal blue";
	216: "Rust";
	217: "Brown";
	218: "Reddish lilac";
	219: "Lilac";
	220: "Light lilac";
	221: "Bright purple";
	222: "Light purple";
	223: "Light pink";
	224: "Light brick yellow";
	225: "Warm yellowish orange";
	226: "Cool yellow";
	232: "Dove blue";
	268: "Medium lilac";
	301: "Slime green";
	302: "Smoky grey";
	303: "Dark blue";
	304: "Parsley green";
	305: "Steel blue";
	306: "Storm blue";
	307: "Lapis";
	308: "Dark indigo";
	309: "Sea green";
	310: "Shamrock";
	311: "Fossil";
	312: "Mulberry";
	313: "Forest green";
	314: "Cadet blue";
	315: "Electric blue";
	316: "Eggplant";
	317: "Moss";
	318: "Artichoke";
	319: "Sage green";
	320: "Ghost grey";
	321: "Lilac";
	322: "Plum";
	323: "Olivine";
	324: "Laurel green";
	325: "Quill grey";
	327: "Crimson";
	328: "Mint";
	329: "Baby blue";
	330: "Carnation pink";
	331: "Persimmon";
	332: "Maroon";
	333: "Gold";
	334: "Daisy orange";
	335: "Pearl";
	336: "Fog";
	337: "Salmon";
	338: "Terra Cotta";
	339: "Cocoa";
	340: "Wheat";
	341: "Buttermilk";
	342: "Mauve";
	343: "Sunrise";
	344: "Tawny";
	345: "Rust";
	346: "Cashmere";
	347: "Khaki";
	348: "Lily white";
	349: "Seashell";
	350: "Burgundy";
	351: "Cork";
	352: "Burlap";
	353: "Beige";
	354: "Oyster";
	355: "Pine Cone";
	356: "Fawn brown";
	357: "Hurricane grey";
	358: "Cloudy grey";
	359: "Linen";
	360: "Copper";
	361: "Dirt brown";
	362: "Bronze";
	363: "Flint";
	364: "Dark taupe";
	365: "Burnt Sienna";
	1001: "Institutional white";
	1002: "Mid gray";
	1003: "Really black";
	1004: "Really red";
	1005: "Deep orange";
	1006: "Alder";
	1007: "Dusty Rose";
	1008: "Olive";
	1009: "New Yeller";
	1010: "Really blue";
	1011: "Navy blue";
	1012: "Deep blue";
	1013: "Cyan";
	1014: "CGA brown";
	1015: "Magenta";
	1016: "Pink";
	1017: "Deep orange";
	1018: "Teal";
	1019: "Toothpaste";
	1020: "Lime green";
	1021: "Camo";
	1022: "Grime";
	1023: "Lavender";
	1024: "Pastel light blue";
	1025: "Pastel orange";
	1026: "Pastel violet";
	1027: "Pastel blue-green";
	1028: "Pastel green";
	1029: "Pastel yellow";
	1030: "Pastel brown";
	1031: "Royal purple";
	1032: "Hot pink";
}

interface BrickColorsByPalette {
	0: 141;
	1: 301;
	2: 107;
	3: 26;
	4: 1012;
	5: 303;
	6: 1011;
	7: 304;
	8: 28;
	9: 1018;
	10: 302;
	11: 305;
	12: 306;
	13: 307;
	14: 308;
	15: 1021;
	16: 309;
	17: 310;
	18: 1019;
	19: 135;
	20: 102;
	21: 23;
	22: 1010;
	23: 312;
	24: 313;
	25: 37;
	26: 1022;
	27: 1020;
	28: 1027;
	29: 311;
	30: 315;
	31: 1023;
	32: 1031;
	33: 316;
	34: 151;
	35: 317;
	36: 318;
	37: 319;
	38: 1024;
	39: 314;
	40: 1013;
	41: 1006;
	42: 321;
	43: 322;
	44: 104;
	45: 1008;
	46: 119;
	47: 323;
	48: 324;
	49: 325;
	50: 320;
	51: 11;
	52: 1026;
	53: 1016;
	54: 1032;
	55: 1015;
	56: 327;
	57: 1005;
	58: 1009;
	59: 29;
	60: 328;
	61: 1028;
	62: 208;
	63: 45;
	64: 329;
	65: 330;
	66: 331;
	67: 1004;
	68: 21;
	69: 332;
	70: 333;
	71: 24;
	72: 334;
	73: 226;
	74: 1029;
	75: 335;
	76: 336;
	77: 342;
	78: 343;
	79: 338;
	80: 1007;
	81: 339;
	82: 133;
	83: 106;
	84: 340;
	85: 341;
	86: 1001;
	87: 1;
	88: 9;
	89: 1025;
	90: 337;
	91: 344;
	92: 345;
	93: 1014;
	94: 105;
	95: 346;
	96: 347;
	97: 348;
	98: 349;
	99: 1030;
	100: 125;
	101: 101;
	102: 350;
	103: 192;
	104: 351;
	105: 352;
	106: 353;
	107: 354;
	108: 1002;
	109: 5;
	110: 18;
	111: 217;
	112: 355;
	113: 356;
	114: 153;
	115: 357;
	116: 358;
	117: 359;
	118: 360;
	119: 38;
	120: 361;
	121: 362;
	122: 199;
	123: 194;
	124: 363;
	125: 364;
	126: 365;
	127: 1003;
}

interface BrickColorConstructor {
	/** Returns a random BrickColor. */
	random: () => BrickColor;

	/** Returns a White BrickColor */
	White: () => BrickColor<1>;
	/** Returns a Gray BrickColor */
	Gray: () => BrickColor<194>;
	/** Returns a DarkGray BrickColor */
	DarkGray: () => BrickColor<199>;
	/** Returns a Black BrickColor */
	Black: () => BrickColor<26>;
	/** Returns a Red BrickColor */
	Red: () => BrickColor<21>;
	/** Returns a Yellow BrickColor */
	Yellow: () => BrickColor<24>;
	/** Returns a Green BrickColor */
	Green: () => BrickColor<28>;
	/** Returns a Blue BrickColor */
	Blue: () => BrickColor<23>;

	/** Constructs a BrickColor from its name. */
	new <T extends BrickColorsByNumber[keyof BrickColorsByNumber]>(
		val: T,
	): BrickColor<
		{ [K in keyof BrickColorsByNumber]: T extends BrickColorsByNumber[K] ? K : never }[keyof BrickColorsByNumber]
	>;

	/** Constructs a BrickColor from its numerical index. */
	new <T extends keyof BrickColorsByNumber>(val: T): BrickColor<T>;

	/** Constructs a BrickColor from its numerical index. */
	new (val: number): BrickColor;

	/** Constructs the closest BrickColor that can be matched to the specified RGB components. */
	new (r: number, g: number, b: number): BrickColor;

	/** Constructs the closest BrickColor that can be matched to the specified Color3. */
	new (color: Color3): BrickColor;

	/** Constructs a BrickColor from its palette index. */
	palette<T extends keyof BrickColorsByPalette>(this: void, paletteValue: T): BrickColor<BrickColorsByPalette[T]>;
	palette(this: void, paletteValue: number): BrickColor;
}

declare const BrickColor: BrickColorConstructor;

// CatalogSearchParams
interface CatalogSearchParams {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CatalogSearchParams: unique symbol;
	/** The keyword to search for catalog results with. */
	SearchKeyword: string;
	/** The minimum item price to search for. */
	MinPrice: number;
	/** The maximum item price to search for. */
	MaxPrice: number;
	/** The order in which to sort the results. */
	SortType: Enum.CatalogSortType;
	/** The time period to use to aggregate the sort results. */
	SortAggregation: Enum.CatalogSortAggregation;
	/** The category to filter the search by. */
	CategoryFilter: Enum.CatalogCategoryFilter;
	/** The sales type filter the search by. */
	SalesTypeFilter: Enum.SalesTypeFilter;
	/** An array containing BundleType values to filter the search by. */
	BundleTypes: ReadonlyArray<Enum.BundleType>;
	/** An array containing AvatarAssetType values to filter the search by. */
	AssetTypes: ReadonlyArray<Enum.AvatarAssetType>;
	/** Whether off sale items should be included in the results. */
	IncludeOffSale: boolean;
	/** Search for items with the given creator. */
	CreatorName: string;
	/** Search for items created by the given creator type.  */
	CreatorType: Enum.CreatorTypeFilter;
	/** Search for items created by the given creator ID. */
	CreatorId: number;
	/** Specifies the number of items to return. Accepts 10, 28, 30, 60, and 120. Defaults to 30. */
	Limit: 10 | 28 | 30 | 60 | 120;
}

interface CatalogSearchParamsConstructor {
	new (): CatalogSearchParams;
}

declare const CatalogSearchParams: CatalogSearchParamsConstructor;

// Content
interface Content {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Content: unique symbol;
	/**
	 * The source type of the contained value.
	 */
	readonly SourceType: Enum.ContentSourceType;
	/**
	 * A URI `string` if `Content.SourceType` is Uri, otherwise `nil`.
	 */
	readonly Uri?: string;
	/**
	 * A reference to a non-nil `Object` if `Content.SourceType` is Object, otherwise `nil`.
	 */
	readonly Object?: RBXObject;
}

interface ContentConstructor {
	/**
	 * An empty Content value with Content.SourceType of None.
	 */
	readonly none: Content;

	fromUri: (uri: string) => Content;
	fromObject: (object: RBXObject) => Content;
}

declare const Content: ContentConstructor;

// CFrame
interface CFrame {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_CFrame: unique symbol;
	/** The 3D position of the CFrame */
	readonly Position: Vector3;
	/** A copy of the CFrame with no translation. */
	readonly Rotation: CFrame;
	/** The x-coordinate of the position */
	readonly X: number;
	/** The y-coordinate of the position */
	readonly Y: number;
	/** The z-coordinate of the position */
	readonly Z: number;
	/** The forward-direction component of the CFrame’s orientation. */
	readonly LookVector: Vector3;
	/** The right-direction component of the CFrame’s orientation. */
	readonly RightVector: Vector3;
	/** The up-direction component of the CFrame’s orientation. */
	readonly UpVector: Vector3;
	/** Equivalent to the first/top row of the rotation matrix, or `Vector3.new(r00, r10, r20)` */
	readonly XVector: Vector3;
	/** Equivalent to the second/middle row of the rotation matrix, or `Vector3.new(r01, r11, r21)` */
	readonly YVector: Vector3;
	/** Equivalent to the third/bottom row of the rotation matrix, or `Vector3.new(r02, r12, r22)` */
	readonly ZVector: Vector3;
	/** Returns the inverse of this CFrame */
	Inverse(this: CFrame): CFrame;
	/** Returns a CFrame interpolated between this CFrame and the goal by the fraction alpha */
	Lerp(this: CFrame, goal: CFrame, alpha: number): CFrame;
	/**
	 * Returns an orthonormalized copy of the CFrame. The BasePart.CFrame property automatically applies orthonormalization,
	 * but other APIs which take CFrames do not, so this method is occasionally necessary when incrementally updating a CFrame and using it with them.
	 */
	Orthonormalize(this: CFrame): CFrame;
	/** Returns a CFrame transformed from Object to World space. Equivalent to `[CFrame * cf]` */
	ToWorldSpace(this: CFrame, cf: CFrame): CFrame;
	/** Returns a CFrame transformed from World to Object space. Equivalent to `[CFrame:inverse() * cf]` */
	ToObjectSpace(this: CFrame, cf: CFrame): CFrame;
	/** Returns a Vector3 transformed from Object to World space. Equivalent to `[CFrame * v3]` */
	PointToWorldSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns a Vector3 transformed from World to Object space. Equivalent to `[CFrame:inverse() * v3]` */
	PointToObjectSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from Object to World space. Equivalent to `[(CFrame - CFrame.p) *v3]` */
	VectorToWorldSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from World to Object space. Equivalent to `[(CFrame:inverse() - CFrame:inverse().p) * v3]` */
	VectorToObjectSpace(this: CFrame, v3: Vector3): Vector3;
	/** Returns the values: x, y, z, R00, R01, R02, R10, R11, R12, R20, R21, R22, where R00-R22 represent the 3x3 rotation matrix of the CFrame, and xyz represent the position of the CFrame. */
	GetComponents(
		this: CFrame,
	): LuaTuple<[number, number, number, number, number, number, number, number, number, number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, Y, X order */
	ToEulerAnglesXYZ(this: CFrame): LuaTuple<[number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order */
	ToEulerAnglesYXZ(this: CFrame): LuaTuple<[number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order (Equivalent to toEulerAnglesYXZ) */
	ToOrientation(this: CFrame): LuaTuple<[number, number, number]>;
	/** Returns a tuple of a Vector3 and a number which represent the rotation of the CFrame in the axis-angle representation */
	ToAxisAngle(this: CFrame): LuaTuple<[Vector3, number]>;
	/** Returns `true` if the other CFrame is sufficiently close to this CFrame in both position and rotation. The `eps` value is used to control the tolerance for this similarity. This value is optional and should be a small positive value if provided. The default value is 0.00001 (1e-5). The similarity for position is component-wise, and for rotation uses a fast approximation of the angle difference. */
	FuzzyEq(this: CFrame, other: CFrame, epsilon?: number): boolean;
}

interface CFrameConstructor {
	/**
	 * An identity CFrame, one with no translation or rotation.
	 *
	 * This API member is a **constant**, and must be accessed through the `CFrame` global as opposed to an individual
	 * `CFrame` object.
	 *
	 * ```lua
	 * print(CFrame.identity) --> 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1
	 * ```
	 */
	readonly identity: CFrame;
	/** Equivalent to fromEulerAnglesXYZ */
	Angles: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame from a Unit Vector3 and a rotation in radians */
	fromAxisAngle: (unit: Vector3, rotation: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in the optional Enum.RotationOrder with a default of `XYZ`. */
	fromEulerAngles: (rX: number, rY: number, rZ: number, order?: Enum.RotationOrder) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, Y, X order. */
	fromEulerAnglesXYZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, X, Y order. */
	fromEulerAnglesYXZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a CFrame from a translation and the columns of a rotation matrix. If vz is excluded,
	 * the third column is calculated as `[vx:Cross(vy).Unit]`.
	 */
	fromMatrix: (pos: Vector3, vX: Vector3, vY: Vector3, vZ?: Vector3) => CFrame;
	/** Equivalent to fromEulerAnglesYXZ */
	fromOrientation: (rX: number, rY: number, rZ: number) => CFrame;
	/**
	 * Creates a new CFrame located at `at` and facing towards `lookAt`, optionally specifying the upward direction (by default, (0, 1, 0)).
	 *
	 * This function replaces the `CFrame.new(Vector3, Vector3)` constructor which accomplished a similar task. This function allows you to specify the `up` Vector, using the same default as the old constructor.
	 */
	lookAt: (at: Vector3, lookAt: Vector3, up?: Vector3) => CFrame;
	/**
	 * Returns a new CFrame with the position of `at` and facing along `direction`, optionally specifying the upward direction (`up`) with a default of `(0, 1, 0)`.
	 *
	 * This constructor is equivalent to `CFrame.lookAt(at, at + direction)`.
	 */
	lookAlong: (at: Vector3, direction: Vector3, up?: Vector3) => CFrame;
	/** Creates a CFrame from a Vector3 */
	new (pos: Vector3): CFrame;
	/** Creates a CFrame from position (x, y, z). */
	new (x: number, y: number, z: number): CFrame;
	/** Creates a blank identity CFrame. */
	new (): CFrame;
	/** Creates a CFrame from position (x, y, z) and quaternion (qX, qY, qZ, qW) */
	new (x: number, y: number, z: number, qX: number, qY: number, qZ: number, qW: number): CFrame;
	/** Creates a CFrame from position (x, y, z) with an orientation specified by the rotation matrix `[[R00 R01 R02] [R10 R11 R12] [R20 R21 R22]]` */
	new (
		x: number,
		y: number,
		z: number,
		R00: number,
		R01: number,
		R02: number,
		R10: number,
		R11: number,
		R12: number,
		R20: number,
		R21: number,
		R22: number,
	): CFrame;
	/** Creates a CFrame located at pos with it’s lookVector pointing towards the lookAt position. */
	new (pos: Vector3, lookAt: Vector3): CFrame;
}

declare const CFrame: CFrameConstructor;

interface ClipEvaluator {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ClipEvaluator: unique symbol;
}

interface Color3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Color3: unique symbol;
	/** The red value of the color (between 0 and 1) */
	readonly R: number;
	/** The green value of the color (between 0 and 1) */
	readonly G: number;
	/** The blue value of the color (between 0 and 1) */
	readonly B: number;
	/** Returns a Color3 interpolated between two Color3 objects. Alpha is a number from 0 to 1. */
	Lerp(this: Color3, goal: Color3, alpha: number): Color3;
	/** Returns the [hue, saturation, and value](https://en.wikipedia.org/wiki/HSL_and_HSV) of a Color3. This function is the inverse operation of the `Color3.fromHSV` constructor. */
	ToHSV(this: Color3): LuaTuple<[number, number, number]>;
	/**
	 * Converts the color to a six-character hexadecimal string representing the color in the format RRGGBB. It is not
	 * prefixed with an octothorpe (#), although this can be concatenated easily.
	 *
	 * The returned string can be provided to `Color3.fromHex` to produce the original color.
	 * ```lua
	 * print(Color3.new(0, 1, 0):ToHex()) --> "00FF00"
	 * print(BrickColor.new("Really red").Color:ToHex()) --> "FF0000"
	 * ```
	 */
	ToHex(this: Color3): string;
}

interface Color3Constructor {
	/** Creates a Color3 with the given red, green, and blue. The numbers can range from 0 to 255. */
	fromRGB: (r?: number, g?: number, b?: number) => Color3;
	/** Creates a Color3 with the given hue, saturation, and value. The numbers can range from 0 to 1. */
	fromHSV: (hue: number, sat: number, val: number) => Color3;
	/** Returns the hue, saturation, and value of a Color3. */
	toHSV: (color: Color3) => LuaTuple<[number, number, number]>;
	/**
	 * Returns a new Color3 from a six- or three-character [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)
	 * format. A preceding octothorpe (#) is ignored, if present. This function interprets the given string as a typical
	 * web hex color in the format RRGGBB or RGB (shorthand for RRGGBB). For example, #FFAA00 produces an orange color,
	 * and is the same as #FA0.
	 *
	 * The color returned can be converted back into hex using `Color3:toHex`, although it is not guaranteed to return
	 * the exact same string as passed to this function.
	 * ```lua
	 * print(Color3.fromHex("#FF0000")) --> 1, 0, 0
	 * ```
	 */
	fromHex: (hex: string) => Color3;
	/** Returns a Color3 with the given red, green, and blue values. The numbers can range from 0 to 1, defaulting to 0 */
	new (red?: number, green?: number, blue?: number): Color3;
}

declare const Color3: Color3Constructor;

// ColorSequence
interface ColorSequence {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorSequence: unique symbol;
	readonly Keypoints: ReadonlyArray<ColorSequenceKeypoint>;
}
interface ColorSequenceConstructor {
	new (color: Color3): ColorSequence;
	new (c0: Color3, c1: Color3): ColorSequence;
	new (colors: ReadonlyArray<ColorSequenceKeypoint>): ColorSequence;
}
declare const ColorSequence: ColorSequenceConstructor;

// ColorSequenceKeypoint
interface ColorSequenceKeypoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_ColorSequenceKeypoint: unique symbol;
	readonly Time: number;
	readonly Value: Color3;
}
type ColorSequenceKeypointConstructor = new (time: number, color: Color3) => ColorSequenceKeypoint;
declare const ColorSequenceKeypoint: ColorSequenceKeypointConstructor;

/**
 * Describes a time value, returned from many of DateTime's methods and used for some of DateTime's constructors
 */
interface TimeValueTable {
	/** Range: 1400-9999 */
	Year: number;

	/** Range: 1-12 */
	Month: number;

	/** Range: 1-31 */
	Day: number;

	/** Range: 0-23 */
	Hour: number;

	/** Range: 0-59 */
	Minute: number;

	/**
	 * Range: 0-60
	 * Usually 0–59, sometimes 60 to accommodate leap seconds in certain systems.
	 */
	Second: number;

	/** Range: 0-999 */
	Millisecond: number;
}

/**
 * A DateTime represents a moment in time using a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
 * It can be used to easily format dates and times in specific locales.
 * When converted to a string, a string conversion of the stored timestamp integer is returned.
 * They do not store timezone values; rather, timezones are considered when constructing and using DateTime objects.
 * DateTime objects are equal if and only if their `UnixTimestampMillis` properties are equal.
 */
interface DateTime {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_DateTime: unique symbol;

	/**
	 * The number of seconds since January 1st, 1970 at 00:00 UTC (the Unix epoch).
	 * For more information, see [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
	 * Range is -17,987,443,200–253,402,300,799, approximately years 1400–9999.
	 */
	readonly UnixTimestamp: number;

	/**
	 * The number of milliseconds since January 1st, 1970 at 00:00 UTC (the Unix epoch).
	 * For more information, see [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
	 * Range is -17,987,443,200,000 to 253,402,300,799,999, approximately years 1400–9999.
	 */
	readonly UnixTimestampMillis: number;

	/** Converts the value of this DateTime object to Universal Coordinated Time (UTC) */
	ToUniversalTime(this: DateTime): TimeValueTable;

	/** Converts the value of this DateTime object to local time */
	ToLocalTime(this: DateTime): TimeValueTable;

	/**
	 * Formats a date as a [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string.
	 * An example ISO 8601 date-time string would be `2020-01-02T10:30:45Z`, which represents January 2nd 2020 at 10:30 AM, 45 seconds.
	 */
	ToIsoDate(this: DateTime): string;

	/**
	 * Generates a string from the DateTime value interpreted as Universal Coordinated Time (UTC) and a format string.
	 * The format string should contain tokens, which will replace to certain date/time values described by the DateTime object.
	 * For details on all the available tokens, see [DateTime Format Strings](https://developer.roblox.com/articles/datetime-format-strings).
	 * @param format
	 * @param locale
	 */
	FormatUniversalTime(this: DateTime, format: string, locale: string): string;

	/**
	 * Generates a string from the DateTime value interpreted as local time and a format string.
	 * The format string should contain tokens, which will replace to certain date/time values described by the DateTime object.
	 * For details on all the available tokens, see [DateTime Format Strings](https://developer.roblox.com/articles/datetime-format-strings).
	 * @param format
	 * @param locale
	 */
	FormatLocalTime(this: DateTime, format: string, locale: string): string;
}

interface DateTimeConstructor {
	/** Creates a new DateTime representing the current moment in time */
	now: () => DateTime;

	/**
	 * Creates a new DateTime object from the given [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time), or the number of seconds since January 1st, 1970 at 00:00 (UTC).
	 * @param unixTimestamp
	 */
	fromUnixTimestamp: (unixTimestamp: number) => DateTime;

	/**
	 * Creates a new DateTime object from the given [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time), or the number of milliseconds since January 1st, 1970 at 00:00 (UTC).
	 * @param unixTimestampMillis
	 */
	fromUnixTimestampMillis: (unixTimestampMillis: number) => DateTime;

	/**
	 * Creates a new DateTime using the given units from a UTC time
	 * - Date units (year, month, day) that produce an invalid date will raise an error. For example, January 32nd or February 29th on a non-leap year.
	 * - Time units (hour, minute, second, millisecond) that are outside their normal range are valid. For example, 90 minutes will cause the hour to roll over by 1; -10 seconds will cause the minute value to roll back by 1.
	 * - Non-integer values are rounded down. For example, providing 2.5 hours will be equivalent to providing 2 hours, not 2 hours 30 minutes.
	 * - Omitted values are assumed to be their lowest value in their normal range, except for year which defaults to 1970.
	 * @param year Defaults to 1970
	 * @param month Defaults to 1
	 * @param day Defaults to 1
	 * @param hour Defaults to 0
	 * @param minute Defaults to 0
	 * @param second Defaults to 0
	 * @param millisecond Defaults to 0
	 */
	fromUniversalTime: (
		year?: number,
		month?: number,
		day?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number,
	) => DateTime;

	/**
	 * Creates a new DateTime using the given units from a local time
	 * - Date units (year, month, day) that produce an invalid date will raise an error. For example, January 32nd or February 29th on a non-leap year.
	 * - Time units (hour, minute, second, millisecond) that are outside their normal range are valid. For example, 90 minutes will cause the hour to roll over by 1; -10 seconds will cause the minute value to roll back by 1.
	 * - Non-integer values are rounded down. For example, providing 2.5 hours will be equivalent to providing 2 hours, not 2 hours 30 minutes.
	 * - Omitted values are assumed to be their lowest value in their normal range, except for year which defaults to 1970.
	 * @param year Defaults to 1970
	 * @param month Defaults to 1
	 * @param day Defaults to 1
	 * @param hour Defaults to 0
	 * @param minute Defaults to 0
	 * @param second Defaults to 0
	 * @param millisecond Defaults to 0
	 */
	fromLocalTime: (
		year?: number,
		month?: number,
		day?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number,
	) => DateTime;

	/**
	 * Creates a DateTime from an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string in UTC time.
	 * If the string parsing fails, returns nil.
	 * An example ISO 8601 date-time string would be `2020-01-02T10:30:45Z`, which represents January nd 2020 at 10:30 AM, 45 seconds.
	 * @param isoDate
	 */
	fromIsoDate: (isoDate: string) => DateTime | undefined;
}

declare const DateTime: DateTimeConstructor;

// DockWidgetPluginGuiInfo
interface DockWidgetPluginGuiInfo {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_DockWidgetPluginGuiInfo: unique symbol;
	readonly InitialDockState: Enum.InitialDockState;
	readonly InitialEnabled: boolean;
	readonly InitialEnabledShouldOverrideRestore: boolean;
	readonly FloatingXSize: number;
	readonly FloatingYSize: number;
	readonly MinWidth: number;
	readonly MinHeight: number;
}
type DockWidgetPluginGuiInfoConstructor = new (
	initDockState?: Enum.InitialDockState,
	initEnabled?: boolean,
	overrideEnabledRestore?: boolean,
	floatXSize?: number,
	floatYSize?: number,
	minWidth?: number,
	minHeight?: number,
) => DockWidgetPluginGuiInfo;
declare const DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfoConstructor;

// Faces
interface Faces {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Faces: unique symbol;
	readonly Top: boolean;
	readonly Bottom: boolean;
	readonly Back: boolean;
	readonly Front: boolean;
	readonly Right: boolean;
	readonly Left: boolean;
}
type FacesConstructor = new (...ids: Array<Enum.NormalId>) => Faces;
declare const Faces: FacesConstructor;

// FloatCurveKey
interface FloatCurveKey {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_FloatCurveKey: unique symbol;
	readonly Time: number;
	readonly Value: number;
	readonly RightTangent: number;
	readonly LeftTangent: number;
}
type FloatCurveKeyConstructor = new (
	time: number,
	value: number,
	interpolation: CastsToEnum<Enum.KeyInterpolationMode>,
) => FloatCurveKey;
declare const FloatCurveKey: FloatCurveKeyConstructor;

// Font
interface Font {
	Bold: boolean;
	Style: Enum.FontStyle;
	Family: string;
	Weight: Enum.FontWeight;
}
interface FontConstructor {
	new (family: string, weight?: Enum.FontWeight, style?: Enum.FontStyle): Font;
	fromEnum: (value: Enum.Font) => Font;
	fromName: (name: string, weight?: Enum.FontWeight, style?: Enum.FontStyle) => Font;
	fromId: (id: number, weight?: Enum.FontWeight, style?: Enum.FontStyle) => Font;
}
declare const Font: FontConstructor;

// NumberRange
interface NumberRange {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberRange: unique symbol;
	readonly Min: number;
	readonly Max: number;
}
interface NumberRangeConstructor {
	new (value: number): NumberRange;
	new (minimum: number, maximum: number): NumberRange;
}
declare const NumberRange: NumberRangeConstructor;

// NumberSequence
interface NumberSequence {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberSequence: unique symbol;
	/** An array containing keypoint values for the NumberSequence. */
	readonly Keypoints: ReadonlyArray<NumberSequenceKeypoint>;
}
interface NumberSequenceConstructor {
	/** Creates a sequence of two keypoints with n for each value */
	new (n: number): NumberSequence;
	/** Creates a sequence of two keypoints with n0 and n1 as the value */
	new (n0: number, n1: number): NumberSequence;
	/** Creates a sequence with a given array containing keypoint values for the NumberSequence. */
	new (keypoints: ReadonlyArray<NumberSequenceKeypoint>): NumberSequence;
}
declare const NumberSequence: NumberSequenceConstructor;

// NumberSequenceKeypoint
interface NumberSequenceKeypoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_NumberSequenceKeypoint: unique symbol;
	readonly Envelope: number;
	readonly Time: number;
	readonly Value: number;
}
interface NumberSequenceKeypointConstructor {
	/** Creates a keypoint with a specified time, value, and envelope if specified. */
	new (time: number, value: number, envelope?: number): NumberSequenceKeypoint;
}
declare const NumberSequenceKeypoint: NumberSequenceKeypointConstructor;

interface OpenCloudModel {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_OpenCloudModel: unique symbol;
}

// OverlapParams
interface OverlapParams {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_OverlapParams: unique symbol;
	/**
	 * An array of objects whose descendants will be used in filtering.
	 */
	FilterDescendantsInstances: Array<Instance>;
	/**
	 * `RaycastFilterType.Include` or `RaycastFilterType.Exclude`. Determines how the `FilterDescendantInstances` is
	 * used. `Exclude` will skip the `FilterDescendantInstances`, and `Include` will exclusively include them.
	 */
	FilterType: Enum.RaycastFilterType;
	/**
	 * The maximum amount of parts to be returned by the query. The process simply early outs once this is met.
	 * (0 is infinite)
	 */
	MaxParts: number;
	/**
	 * The collision group the region check is performed on. Parts set to not collide with this group will be ignored.
	 */
	CollisionGroup: string;
	/**
	 * This property, if true, makes the boundary-querying operation use an intersected part's BasePart.CanCollide value in favor of its BasePart.CanQuery value when determining whether that part is included in the array of spatial query results.
	 */
	RespectCanCollide: boolean;
	/**
	 * This property, if true, finds all parts that inserect the region even if they have CanQuery set to false.
	 */
	BruteForceAllSlow: boolean;
	/**
	 * For efficiency and simplicity, this method is the preferred way to add instances to the filter.
	 * It has the additional advantage that it allows FilterDescendantsInstances to be updated from a parallel context.
	 */
	AddToFilter(this: OverlapParams, instances: Instance | Array<Instance>): void;
}
type OverlapParamsConstructor = new () => OverlapParams;
declare const OverlapParams: OverlapParamsConstructor;

// PathWaypoint
interface PathWaypoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PathWaypoint: unique symbol;
	/**
	 * The action to perform at this waypoint.
	 */
	readonly Action: Enum.PathWaypointAction;
	/**
	 * The 3D position of this waypoint.
	 */
	readonly Position: Vector3;
	/**
	 * The name of the navigation area that generates this waypoint. You can use PathwayPoint.Label to decide the custom
	 * action to take to reach the waypoint. PathfindingModifier and Material each have a Label. Automatic jump links
	 * have "Jump" as their Label.
	 */
	readonly Label: string;
}
interface PathWaypointConstructor {
	new (): PathWaypoint;
	new (position: Vector3, action?: Enum.PathWaypointAction, label?: string): PathWaypoint;
}

declare const PathWaypoint: PathWaypointConstructor;

interface Path2DControlPoint {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Path2DControlPoint: unique symbol;
	/** The position of the `Path2DControlPoint`. */
	Position: UDim2;
	/** The left tangent of the `Path2DControlPoint`. */
	LeftTangent: UDim2;
	/** The right tangent of the `Path2DControlPoint`. */
	RightTangent: UDim2;
}

interface Path2DControlPointConstructor {
	/** Returns an empty `Path2DControlPoint`. */
	new (): Path2DControlPoint;
	/** Returns a `Path2DControlPoint` with only the position set. */
	new (position: UDim2): Path2DControlPoint;
	/** Returns a `Path2DControlPoint` with the position, left tangent, and right tangent set. */
	new (position: UDim2, leftTangent: UDim2, rightTangent: UDim2): Path2DControlPoint;
}

declare const Path2DControlPoint: Path2DControlPointConstructor;

// PhysicalProperties
interface PhysicalProperties {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_PhysicalProperties: unique symbol;
	readonly Density: number;
	readonly Friction: number;
	readonly Elasticity: number;
	readonly FrictionWeight: number;
	readonly ElasticityWeight: number;
}
interface PhysicalPropertiesConstructor {
	new (density: number, friction: number, elasticity: number): PhysicalProperties;
	new (
		density: number,
		friction: number,
		elasticity: number,
		frictionWeight: number,
		elasticityWeight: number,
	): PhysicalProperties;
	new (material: Enum.Material): PhysicalProperties;
}
declare const PhysicalProperties: PhysicalPropertiesConstructor;

// Random
interface Random {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Random: unique symbol;
	/**
	 * Returns a pseudorandom integer uniformly distributed over [min, max].
	 */
	NextInteger(this: Random, min: number, max: number): number;
	/**
	 * Returns a pseudorandom number uniformly distributed over [0, 1).
	 */
	NextNumber(this: Random): number;
	/**
	 * Returns a pseudorandom number uniformly distributed over [min, max).
	 */
	NextNumber(this: Random, min: number, max: number): number;
	/**
	 * Uniformly shuffles the array part of `tb` in-place using `NextInteger` to pick indices. If there are any `nil` "holes" in the array part of the table, `Shuffle` throws an error, since shuffling could change the length.
	 *
	 * The hash part of `tb` is ignored. No metamethods are of `tb` are invoked.
	 *
	 * The shuffle is defined to be a Fisher-Yates shuffle so the number of `NextInteger` calls is guaranteed to be consistent between engine versions for a given size of table.
	 */
	Shuffle(this: Random, tb: Array<unknown>): void;
	/**
	 * Returns a unit vector with a pseudorandom direction.
	 *
	 * Vectors returned from this function are uniformly distributed over the unit sphere.
	 */
	NextUnitVector(this: Random): Vector3;
	/**
	 * Returns a new Random object with the same state as the original.
	 */
	Clone(this: Random): Random;
}

interface RandomConstructor {
	new (seed: number): Random;
	new (): Random;
}

declare const Random: RandomConstructor;

// Ray
interface Ray {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Ray: unique symbol;
	readonly Origin: Vector3;
	readonly Direction: Vector3;
	readonly Unit: Ray;
	ClosestPoint(this: Ray, point: Vector3): Vector3;
	Distance(this: Ray, point: Vector3): number;
}

type RayConstructor = new (origin?: Vector3, direction?: Vector3) => Ray;

declare const Ray: RayConstructor;

// RaycastParams
interface RaycastParams {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_RaycastParams: unique symbol;
	/** An array of objects whose descendants will be used in filtering raycasting candidates. */
	FilterDescendantsInstances: Array<Instance>;
	/**
	 * Determines how the `FilterDescendantsInstances` list will be used, depending on the
	 * [RaycastFilterType](https://developer.roblox.com/api-reference/enum/RaycastFilterType) provided.
	 *
	 * - `Enum.RaycastFilterType.Include` — Only [BaseParts](https://developer.roblox.com/api-reference/class/BasePart)
	 * which are descendants of objects in the filter list will be considered in the raycast operation.
	 * - `Enum.RaycastFilterType.Exclude` — Every [BasePart](https://developer.roblox.com/api-reference/class/BasePart)
	 * in the game will be considered except those that are descendants of objects in the filter list.
	 */
	FilterType: Enum.RaycastFilterType;
	/**
	 * Determines whether the water material is considered when raycasting against
	 * [Terrain](https://developer.roblox.com/api-reference/class/Terrain).
	 */
	IgnoreWater: boolean;
	/**
	 * Specifies a [collision group](https://developer.roblox.com/articles/Collision-Filtering) for the raycasting
	 * operation. Parts in collision groups that are set to **not** collide with this group will be ignored. If this
	 * property is omitted, the raycast will assume the **Default** collision group.
	 */
	CollisionGroup: string;
	/**
	 * This property, if `true`, makes the raycast operation use an intersected part's `CanCollide` value in favor of
	 * its `CanQuery` value when determining whether that part is included in the `RaycastResult`
	 */
	RespectCanCollide: boolean;
	/**
	 * When enabled, the query will ignore all part collision properties and perform a brute-force check on every part.
	 * This will negatively impact performance and should not be used in live experiences.
	 */
	BruteForceAllSlow: boolean;
	/**
	 * For efficiency and simplicity, this method is the preferred way to add instances to the filter.
	 * It has the additional advantage that it allows FilterDescendantsInstances to be updated from a parallel context.
	 */
	AddToFilter(this: RaycastParams, instances: Instance | Array<Instance>): void;
}

type RaycastParamsConstructor = new () => RaycastParams;

declare const RaycastParams: RaycastParamsConstructor;

// RaycastResult
interface RaycastResult {
	readonly Distance: number;
	readonly Instance: BasePart;
	readonly Material: Enum.Material;
	readonly Normal: Vector3;
	readonly Position: Vector3;
}

// Rect
interface Rect {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Rect: unique symbol;
	readonly Min: Vector2;
	readonly Max: Vector2;
	readonly Width: number;
	readonly Height: number;
}
interface RectConstructor {
	new (min?: Vector2, max?: Vector2): Rect;
	new (minX: number, minY: number, maxX: number, maxY: number): Rect;
}

declare const Rect: RectConstructor;

// Region3
interface Region3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Region3: unique symbol;
	readonly CFrame: CFrame;
	readonly Size: Vector3;
	ExpandToGrid(this: Region3, resolution: number): Region3;
}

type Region3Constructor = new (min?: Vector3, max?: Vector3) => Region3;

declare const Region3: Region3Constructor;

// Region3int16
interface Region3int16 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Region3int16: unique symbol;
	readonly Min: Vector3int16;
	readonly Max: Vector3int16;
}

type Region3int16Constructor = new (min?: Vector3int16, max?: Vector3int16) => Region3int16;

declare const Region3int16: Region3int16Constructor;

// RotationCurveKey
interface RotationCurveKey {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_RotationCurveKey: unique symbol;
	readonly Time: number;
	readonly Value: CFrame;
}
type RotationCurveKeyConstructor = new (
	time: number,
	value: CFrame,
	interpolation: CastsToEnum<Enum.KeyInterpolationMode>,
) => RotationCurveKey;
declare const RotationCurveKey: RotationCurveKeyConstructor;

// SecurityCapabilities
interface SecurityCapabilities {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_SecurityCapabilities: unique symbol;
	Add(this: SecurityCapabilities, ...capabilities: Array<Enum.SecurityCapability>): void;
	Remove(this: SecurityCapabilities, ...capabilities: Array<Enum.SecurityCapability>): void;
	Contains(this: SecurityCapabilities, ...capabilities: Array<Enum.SecurityCapability>): void;
}

interface SecurityCapabilitiesConstructor {
	new (...capabilities: Array<Enum.SecurityCapability>): SecurityCapabilities;
	fromCurrent: () => SecurityCapabilities;
}

interface Secret {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Secret: unique symbol;

	/** Prepends a string to the secret content. */
	AddPrefix(this: Secret, prefix: string): Secret;

	/** Appends a string to the secret content. */
	AddSuffix(this: Secret, suffix: string): Secret;
}

declare const SharedTableNominal: unique symbol;
type SharedTableValue = boolean | number | Vector3 | string | SharedTable | Instance | typeof SharedTableNominal;
// SharedTable
interface SharedTable {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_SharedTable: typeof SharedTableNominal;
	[K: string | number]: SharedTableValue;
}

interface SharedTableConstructor {
	/** Returns a new, empty SharedTable. */
	new (): SharedTable;
	/** Returns a new SharedTable containing elements equivalent to those in the provided object. */
	new (t: object): SharedTable;
	/** Removes all of the elements from the SharedTable. */
	clear: (st: SharedTable) => void;
	/**
	 * Creates a clone of a SharedTable and returns the clone.
	 *
	 * If the optional deep argument is not present, or if it is present and its value is false, then a shallow clone is created.
	 * A shallow clone copies only the top-level SharedTable object. If any value in the SharedTable itself is a SharedTable, then both the original SharedTable and the clone SharedTable will refer to the same SharedTable.
	 *
	 * The shallow clone operation is atomic, so the clone SharedTable will contain a consistent snapshot of the state in the original SharedTable, even if it is being modified concurrently from other scripts.
	 *
	 * If the optional deep argument is present and its value is true, then a deep clone is created.
	 * A deep clone recursively copies a structure of SharedTable objects, such that there is no state shared between the original SharedTable and the clone.
	 *
	 * The clone of each SharedTable within the graph of SharedTable objects is atomic, but the deep clone as a whole is not atomic.
	 * Thus, the clone of each SharedTable within the graph will contain a consistent snapshot of the state of the original SharedTable object from which it was cloned, but the states of different SharedTable objects may be inconsistent if the graph is being modified concurrently from other scripts.
	 *
	 * The SharedTable object(s) being cloned may be frozen (read-only) or not.
	 * Regardless, the newly created clones are not frozen (and are thus modifiable).
	 * To create frozen clones, use the SharedTable.cloneAndFreeze function.
	 */
	clone: (st: SharedTable, deep?: boolean) => SharedTable;
	/**
	 * Creates a frozen (read-only) clone of a SharedTable and returns the clone.
	 * The behavior of this function is the same as the behavior of clone, except that the clone is frozen.
	 *
	 * If a deep clone is requested, then all of the cloned SharedTable objects are frozen.
	 */
	cloneAndFreeze: (st: SharedTable, deep?: boolean) => SharedTable;
	/**
	 * Atomically increments the value of an element.
	 * An element with the specified key must exist in the SharedTable, and it must be of type number.
	 * The specified delta is added to the value, and the original value is returned.
	 *
	 * The SharedTable.update function can also be used for this purpose; this increment function exists for convenience and performance.
	 * In general, increment is much faster than update, so it should be preferred where possible.
	 */
	increment: (st: SharedTable, k: string | number, delta: number) => number;
	/** Returns true if the SharedTable is frozen (read-only). */
	isFrozen: (st: SharedTable) => boolean;
	/**
	 * Returns the number of elements stored in the SharedTable.
	 * Note that if other scripts are concurrently modifying the SharedTable, the returned size may no longer be correct after it is returned, since other scripts may have added or removed elements from the SharedTable.
	 */
	size: (st: SharedTable) => number;
	/**
	 * Atomically updates the value of an element.
	 *
	 * When a SharedTable is accessed concurrently from scripts running in different execution contexts, it is possible for their accesses to interleave unpredictably.
	 * Because of this, code like the following is generally incorrect, because the value may have changed between the read on the first line and the update on the second line:
	 * ```ts
	 * const oldValue = st["x"];
	 * st["x"] = oldValue + ",x";
	 * ```
	 * The update function makes it possible to perform an atomic update to an element.
	 * It takes a function that it will call with the current value of the element.
	 * The function can then compute and return the new value.
	 * Note that the function may be called multiple times if the SharedTable is being concurrently modified from other scripts.
	 *
	 * If the SharedTable is frozen, the operation fails and an error will be raised.
	 */
	update: (st: SharedTable, k: string | number, f: (v: SharedTableValue) => SharedTableValue) => void;
}

declare const SharedTable: SharedTableConstructor;

// TextChatMessage
interface TextChatMessage {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_TextChatMessage: unique symbol;
}

// TweenInfo
interface TweenInfo {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_TweenInfo: unique symbol;
	readonly Time: number;
	readonly EasingStyle: Enum.EasingStyle;
	readonly EasingDirection: Enum.EasingDirection;
	readonly RepeatCount: number;
	readonly Reverses: boolean;
	readonly DelayTime: number;
}

type TweenInfoConstructor = new (
	time?: number,
	easingStyle?: Enum.EasingStyle,
	easingDirection?: Enum.EasingDirection,
	repeatCount?: number,
	reverses?: boolean,
	delayTime?: number,
) => TweenInfo;

declare const TweenInfo: TweenInfoConstructor;

// UDim
interface UDim {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UDim: unique symbol;
	readonly Scale: number;
	readonly Offset: number;
}

type UDimConstructor = new (scale?: number, offset?: number) => UDim;

declare const UDim: UDimConstructor;

// UDim2
interface UDim2 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_UDim2: unique symbol;
	readonly X: UDim;
	readonly Y: UDim;
	readonly Width: UDim;
	readonly Height: UDim;
	Lerp(this: UDim2, goal: UDim2, alpha: number): UDim2;
}

interface UDim2Constructor {
	new (xScale: number, xOffset: number, yScale: number, yOffset: number): UDim2;
	new (xDim: UDim, yDim: UDim): UDim2;
	new (): UDim2;
	fromOffset: (x?: number, y?: number) => UDim2;
	fromScale: (x?: number, y?: number) => UDim2;
}

declare const UDim2: UDim2Constructor;

// Vector2
interface Vector2 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector2: unique symbol;
	/** The x-coordinate of the Vector2. */
	readonly X: number;
	/** The y-coordinate of the Vector2. */
	readonly Y: number;
	/** A normalized copy of the vector - has a magnitude of 1. */
	readonly Unit: Vector2;
	/** The length of the vector */
	readonly Magnitude: number;
	/** Returns a new vector from the absolute values of the original's components. For example, a vector of `(-2, 4)` returns a vector of `(2, 4)`. */
	Abs(this: Vector2): Vector2;
	/** Returns a new vector from the ceiling of the original's components. For example, a vector of `(-2.6, 5.1)` returns a vector of `(-2, 6)`. */
	Ceil(this: Vector2): Vector2;
	/** Returns a new vector from the floor of the original's components. For example, a vector of `(-2.6, 5.1)` returns a vector of `(-3, 5)`. */
	Floor(this: Vector2): Vector2;
	/** Returns a new vector from the sign (-1, 0, or 1) of the original's components. For example, a vector of `(-2.6, 5.1)` returns a vector of `(-1, 1)`. */
	Sign(this: Vector2): Vector2;
	/** Returns the angle in radians between the two vectors. Specify `true` for the optional `isSigned` boolean if you want a signed angle. By default, the method returns the absolute value. */
	Angle(this: Vector2, other: Vector2, isSigned?: boolean): number;
	/** Returns a scalar dot product of the two vectors */
	Dot(this: Vector2, other: Vector2): number;
	/** Returns a Vector2 linearly interpolated between this Vector2 and the goal by the fraction alpha */
	Lerp(this: Vector2, goal: Vector2, alpha: number): Vector2;
	/** Returns the cross product of the two vectors */
	Cross(this: Vector2, other: Vector2): number;
	/** Returns a new Vector2 with the minimum of each component. */
	Min(this: Vector2, ...vectors: Array<Vector2>): Vector2;
	/** Returns a new Vector2 with the maximum of each component. */
	Max(this: Vector2, ...vectors: Array<Vector2>): Vector2;
}

interface Vector2Constructor {
	/**
	 * A Vector2 with a magnitude of zero.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector2` global as opposed to an individual
	 * `Vector2` object.
	 *
	 * ```lua
	 * print(Vector2.zero) --> 0, 0
	 * ```
	 */
	readonly zero: Vector2;
	/**
	 * A Vector2 with a value of 1 on every axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector2` global as opposed to an individual
	 * `Vector2` object.
	 *
	 * ```lua
	 * print(Vector2.one) --> 1, 1
	 * ```
	 */
	readonly one: Vector2;
	/**
	 * A Vector2 with a value of 1 on the X axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector2` global as opposed to an individual
	 * `Vector2` object.
	 *
	 * ```lua
	 * print(Vector2.xAxis) --> 1, 0
	 * ```
	 */
	readonly xAxis: Vector2;
	/**
	 * A Vector2 with a value of 1 on the Y axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector2` global as opposed to an individual
	 * `Vector2` object.
	 *
	 * ```lua
	 * print(Vector2.yAxis) --> 0, 1
	 * ```
	 */
	readonly yAxis: Vector2;
	/** Returns a Vector2 from the given x and y components. */
	new (x?: number, y?: number): Vector2;
}

declare const Vector2: Vector2Constructor;

// Vector2int16
interface Vector2int16 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector2int16: unique symbol;
	readonly X: number;
	readonly Y: number;
}

type Vector2int16Constructor = new (x?: number, y?: number) => Vector2int16;

declare const Vector2int16: Vector2int16Constructor;

// Vector3
interface Vector3 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector3: unique symbol;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
	/** A normalized copy of the vector - one which has the same direction as the original but a magnitude of 1. */
	readonly Unit: Vector3;
	/** The length of the vector */
	readonly Magnitude: number;
	/** Returns a new vector from the absolute values of the original's components. For example, a vector of `(-2, 4, -6)` returns a vector of `(2, 4, 6)`. */
	Abs(this: Vector3): Vector3;
	/** Returns a new vector from the ceiling of the original's components. For example, a vector of `(-2.6, 5.1, 8.8)` returns a vector of `(-2, 6, 9)`. */
	Ceil(this: Vector3): Vector3;
	/** Returns a new vector from the floor of the original's components. For example, a vector of `(-2.6, 5.1, 8.8)` returns a vector of `(-3, 5, 8)`. */
	Floor(this: Vector3): Vector3;
	/** Returns a new vector from the sign (-1, 0, or 1) of the original's components. For example, a vector of `(-2.6, 5.1, 0)` returns a vector of `(-1, 1, 0)`. */
	Sign(this: Vector3): Vector3;
	/** Returns a Vector3 linearly interpolated between this Vector3 and the goal by the fraction alpha. */
	Lerp(this: Vector3, goal: Vector3, alpha: number): Vector3;
	/** Returns a scalar dot product of the two vectors. */
	Dot(this: Vector3, other: Vector3): number;
	/** Returns the cross product of the two vectors. */
	Cross(this: Vector3, other: Vector3): Vector3;
	/** Returns true if the other Vector3 falls within the epsilon radius of this Vector3. */
	FuzzyEq(this: Vector3, other: Vector3, epsilon?: number): boolean;
	/** Returns a new Vector3 with the minimum of each component. */
	Min(this: Vector3, ...vectors: Array<Vector3>): Vector3;
	/** Returns a new Vector3 with the maximum of each component. */
	Max(this: Vector3, ...vectors: Array<Vector3>): Vector3;
	/** Returns the angle in radians between the two vectors. If an axis is provided, it determines the sign of the angle. */
	Angle(this: Vector3, other: Vector3, axis?: Vector3): number;
}

interface Vector3Constructor {
	/**
	 * A Vector3 with a magnitude of zero.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector3` global as opposed to an individual
	 * `Vector3` object.
	 *
	 * ```lua
	 * print(Vector3.zero) --> 0, 0, 0
	 * ```
	 */
	readonly zero: Vector3;
	/**
	 * A Vector3 with a value of 1 on every axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector3` global as opposed to an individual
	 * `Vector3` object.
	 *
	 * ```lua
	 * print(Vector3.one) --> 1, 1, 1
	 * ```
	 */
	readonly one: Vector3;
	/**
	 * A Vector3 with a value of 1 on the X axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector3` global as opposed to an individual
	 * `Vector3` object.
	 *
	 * ```lua
	 * print(Vector3.xAxis) --> 1, 0, 0
	 * ```
	 */
	readonly xAxis: Vector3;
	/**
	 * A Vector3 with a value of 1 on the Y axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector3` global as opposed to an individual
	 * `Vector3` object.
	 *
	 * ```lua
	 * print(Vector3.yAxis) --> 0, 1, 0
	 * ```
	 */
	readonly yAxis: Vector3;
	/**
	 * A Vector3 with a value of 1 on the Z axis.
	 *
	 * This API member is a **constant**, and must be accessed through the `Vector3` global as opposed to an individual
	 * `Vector3` object.
	 *
	 * ```lua
	 * print(Vector3.zAxis) --> 0, 0, 1
	 * ```
	 */
	readonly zAxis: Vector3;
	/** Constructs a new Vector3 in a particular direction. */
	FromNormalId: (norm: Enum.NormalId) => Vector3;
	/** Constructs a new Vector3 for a particular axis. */
	FromAxis: (axis: Enum.Axis) => Vector3;
	/** Constructs a new Vector3 using the given x, y, and z components. */
	new (x?: number, y?: number, z?: number): Vector3;
}

declare const Vector3: Vector3Constructor;

// Vector3int16
interface Vector3int16 {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Vector3int16: unique symbol;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
}

type Vector3int16Constructor = new (x?: number, y?: number, z?: number) => Vector3int16;

declare const Vector3int16: Vector3int16Constructor;

// unusable internal studio classes
interface QFont {}
interface QDir {}

// built-in globals
declare const game: DataModel;
declare const script: LuaSourceContainer;
declare const shared: object;

type DelayedCallback =
	/**
	 * @param delayedTime The amount of time in seconds which elapsed since the function invoking this callback was called
	 * @param gameTime The total time Roblox Lua has been running
	 */
	(delayedTime: number, gameTime: number) => void;

// built-in functions

/** Schedules a function to be executed after delayTime seconds have passed, without yielding the current thread. This function allows multiple Lua threads to be executed in parallel from the same stack. The delay will have a minimum duration of 29 milliseconds, but this minimum may be higher depending on the target framerate and various throttling conditions. If the delayTime parameter is not specified, the minimum duration will be used. */
declare function delay(delayTime: number, callback: DelayedCallback): void;
/**
 * Returns how much time has elapsed since the current instance of Roblox was started.
 * In Roblox Studio, this begins counting up from the moment Roblox Studio starts running, not just when opening a place.
 * @deprecated use os.clock() instead.
 */
declare function elapsedTime(): number;
/**
 * Returns the total memory heap size in kilobytes.
 * The number reflects the current heap consumption from the operating system perspective, which fluctuates over time as garbage collector frees objects.
 */
declare function gcinfo(): number;
/** Runs the supplied ModuleScript if it has not been run already, and returns what the ModuleScript returned (in both cases).

If the ModuleScript the user wants to use has been uploaded to Roblox (with the instance’s name being ‘MainModule’), it can be loaded by using the require function on the asset ID of the ModuleScript, though only on the server. */
declare function require(moduleScript: ModuleScript | number): unknown;
/** Runs the specified callback function in a separate thread, without yielding the current thread.
The function will be executed the next time Roblox’s Task Scheduler runs an update cycle. This delay will take at least 29 milliseconds but can arbitrarily take longer, depending on the target framerate and various throttling conditions. */
declare function spawn(callback: DelayedCallback): void;
declare function tick(): number;
/** Time since the game started running. Will be 0 in Studio when not running the game. */
declare function time(): number;
declare function UserSettings(): UserSettings;
/** Returns the current version of Roblox as a string. The integers in the version string are separated by periods, and each integers represent the following, in order:

Generation - The current generation of the application shell that is hosting the client.
Version - The current release version of Roblox.
Patch - The current patch number for this version of Roblox.
Commit - The ID of the last internal commit that was accepted into this version of the client. */
declare function version(): string;
/** Yields the current thread until the specified amount of seconds have elapsed.
The delay will have a minimum duration of 29 milliseconds, but this minimum may be higher depending on the target framerate and various throttling conditions. If the seconds parameter is not specified, the minimum duration will be used.
This function returns:

Actual time yielded (in seconds)
Total time since the software was initialized (in seconds) */
declare function wait(seconds?: number): LuaTuple<[number, number]>;
/** Behaves identically to Lua’s print function, except the output is styled as a warning, with yellow text and a timestamp.
This function accepts any number of arguments, and will attempt to convert them into strings which will then be joined together with spaces between them. */
declare function warn(...params: Array<unknown>): void;

// math functions
declare namespace math {
	/**
	 * Returns a perlin noise value. The returned value is most often between the range [-1, 1].
	 *
	 * The returned value is sometimes will be outside of the range [-1,1], so if the interval is critical to you,
	 * you should use `math.clamp(noise, -1, 1)` on the output.
	 *
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates.
	 * For example, `math.noise(1.158, 5.723)` will always return `0.48397532105446` and `math.noise(1.158, 6)` will always return `0.15315161645412`.
	 *
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5.
	 * For coordinates that are close to each other, the return values will also be close to each other.
	 */
	function noise(x: number, y?: number, z?: number): number;
	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

declare namespace utf8 {
	/** Receives zero or more codepoints as integers, converts each one to its corresponding UTF-8 byte sequence and returns a string with the concatenation of all these sequences. */
	function char(...codepoints: Array<number>): string;
	/** Returns an iterator function that will iterate over all codepoints in string str. It raises an error if it meets any invalid byte sequence. */
	function codes(str: string): IterableFunction<LuaTuple<[number, number]>>;
	/** Returns the codepoints (as integers) from all codepoints in the provided string (str) that start between byte positions i and j (both included). The default for i is 0 and for j is i. It raises an error if it meets any invalid byte sequence. Similar to `string.byte`.*/
	function codepoint(str: string, i?: number, j?: number): LuaTuple<Array<number>>;
	/** Returns the number of UTF-8 codepoints in the string str that start between positions i and j (both inclusive). The default for i is 0 and for j is -1. If it finds any invalid byte sequence, returns a false value plus the position of the first invalid byte. */
	function len(s: string, i?: number, j?: number): LuaTuple<[number, undefined] | [false, number]>;
	/** Returns the position (in bytes) where the encoding of the n-th codepoint of s (counting from byte position i) starts. A negative n gets characters before position i. The default for i is 0 when n is non-negative and #s + 1 otherwise, so that utf8.offset(s, -n) gets the offset of the n-th character from the end of the string. If the specified character is neither in the subject nor right after its end, the function returns nil. */
	function offset(s: string, n: number, i?: number): number | undefined;
	/** Returns an iterator function that will iterate the grapheme clusters of the string. */
	function graphemes(s: string, i?: number, j?: number): IterableFunction<LuaTuple<[number, number]>>;
	/** Converts the input string to Normal Form C, which tries to convert decomposed characters into composed characters. */
	function nfcnormalize(str: string): string;
	/** Converts the input string to Normal Form D, which tries to break up composed characters into decomposed characters. */
	function nfdnormalize(str: string): string;
	/** The pattern which matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string. */
	const charpattern: "[%z\x01-\x7F\xC2-\xF4][\x80-\xBF]*";
}

declare namespace task {
	/** Queues the calling script to be run during the parallel execution phase of the frame. */
	function desynchronize(): void;
	/** Yields the calling script and queues it for serial execution following the completion of the parallel execution phase of the frame. */
	function synchronize(): void;
	/** Defers the passed thread or function to be resumed at the end of the current resumption cycle. */
	function defer<T extends Array<any>>(callback: (...args: T) => void, ...args: T): thread;
	function defer(thread: thread, ...args: Array<unknown>): thread;
	/** Delays the passed thread or function until the given duration has elapsed. Resumes on engine Heartbeat. */
	function delay<T extends Array<any>>(duration: number, callback: (...args: T) => void, ...args: T): thread;
	function delay(duration: number, thread: thread, ...args: Array<unknown>): thread;
	/** Resumes the passed thread or function instantly using the engine's scheduler. */
	function spawn<T extends Array<any>>(callback: (...args: T) => void, ...args: T): thread;
	function spawn(thread: thread, ...args: Array<unknown>): thread;
	/** Delay the current thread until the given duration has elasped. Resumes on engine Heartbeat. */
	function wait(duration?: number): number;
	/** Cancels a thread, preventing it from being resumed. */
	function cancel(thread: thread): void;
}

interface buffer {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_buffer: unique symbol;
}

declare namespace buffer {
	/** Creates a buffer. */
	function create(size: number): buffer;

	/** Creates a buffer from a string. */
	function fromstring(str: string): buffer;

	/** Converts a buffer to a string. */
	function tostring(b: buffer): string;

	/** Returns the size of the buffer in bytes. */
	function len(b: buffer): number;

	/** Reads an 8-bit signed integer from the buffer. */
	function readi8(b: buffer, offset: number): number;

	/** Reads an 8-bit unsigned integer from the buffer. */
	function readu8(b: buffer, offset: number): number;

	/** Reads a 16-bit signed integer from the buffer. */
	function readi16(b: buffer, offset: number): number;

	/** Reads a 16-bit unsigned integer from the buffer. */
	function readu16(b: buffer, offset: number): number;

	/** Reads a 32-bit signed integer from the buffer. */
	function readi32(b: buffer, offset: number): number;

	/** Reads a 32-bit unsigned integer from the buffer. */
	function readu32(b: buffer, offset: number): number;

	/** Reads a 32-bit floating-point value from the buffer. */
	function readf32(b: buffer, offset: number): number;

	/** Reads a 64-bit floating-point value from the buffer. */
	function readf64(b: buffer, offset: number): number;

	/** Writes an 8-bit signed integer to the buffer. */
	function writei8(b: buffer, offset: number, value: number): void;

	/** Writes an 8-bit unsigned integer to the buffer. */
	function writeu8(b: buffer, offset: number, value: number): void;

	/** Writes a 16-bit signed integer to the buffer. */
	function writei16(b: buffer, offset: number, value: number): void;

	/** Writes a 16-bit unsigned integer to the buffer. */
	function writeu16(b: buffer, offset: number, value: number): void;

	/** Writes a 32-bit signed integer to the buffer. */
	function writei32(b: buffer, offset: number, value: number): void;

	/** Writes a 32-bit unsigned integer to the buffer. */
	function writeu32(b: buffer, offset: number, value: number): void;

	/** Writes a 32-bit floating-point value to the buffer. */
	function writef32(b: buffer, offset: number, value: number): void;

	/** Writes a 64-bit floating-point value to the buffer. */
	function writef64(b: buffer, offset: number, value: number): void;

	/** Reads a string from the buffer. */
	function readstring(b: buffer, offset: number, count: number): string;

	/** Writes a string to the buffer. */
	function writestring(b: buffer, offset: number, value: string, count?: number): void;

	/** Copies bytes between buffers. */
	function copy(target: buffer, targetOffset: number, source: buffer, sourceOffset?: number, count?: number): void;

	/** Sets a region of the buffer memory to some 8-bit unsigned integer value. */
	function fill(b: buffer, offset: number, value: number, count?: number): void;
}

interface vector {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_vector: unique symbol;

	readonly x: number;
	readonly y: number;
	readonly z: number;
}

declare namespace vector {
	/** Constant vector with all components set to zero. */
	const zero: vector;

	/** Constant vector with all components set to one. */
	const one: vector;

	/** Creates a new vector with the given component values. */
	function create(x: number, y: number, z: number): vector;

	/** Calculates the magnitude of a given vector. */
	function magnitude(vec: vector): number;

	/** Computes the normalized version (unit vector) of a given vector. */
	function normalize(vec: vector): vector;

	/** Computes the cross product of two vectors. */
	function cross(vec1: vector, vec2: vector): vector;

	/** Computes the dot product of two vectors. */
	function dot(vec1: vector, vec2: vector): number;

	/** Computes the angle between two vectors in radians. The axis, if specified, is used to determine the sign of the angle. */
	function angle(vec1: vector, vec2: vector, axis?: vector): number;

	/** Applies `math.floor` to every component of the input vector. */
	function floor(vec: vector): vector;

	/** Applies `math.ceil` to every component of the input vector. */
	function ceil(vec: vector): vector;

	/** Applies `math.abs` to every component of the input vector. */
	function abs(vec: vector): vector;

	/** Applies `math.sign` to every component of the input vector. */
	function sign(vec: vector): vector;

	/** Applies `math.clamp` to every component of the input vector. */
	function clamp(vec: vector, min: vector, max: vector): vector;

	/** Applies `math.max` to the corresponding components of the input vectors. Equivalent to `vector.create(math.max((...).x), math.max((...).y), math.max((...).z))`. */
	function max(...vecs: Array<vector>): vector;

	/** Applies `math.min` to the corresponding components of the input vectors. Equivalent to `vector.create(math.min((...).x), math.min((...).y), math.min((...).z))`. */
	function min(...vecs: Array<vector>): vector;
}

interface GettableCores {
	AvatarContextMenuEnabled: boolean;
	PointsNotificationsActive: boolean;
	BadgesNotificationsActive: boolean;
	ChatActive: boolean;
	ChatWindowSize: UDim2;
	ChatWindowPosition: UDim2;
	ChatBarDisabled: boolean;
	GetBlockedUserIds: Array<number>;
	PlayerBlockedEvent: BindableEvent;
	PlayerUnblockedEvent: BindableEvent;
	PlayerMutedEvent: BindableEvent;
	PlayerUnmutedEvent: BindableEvent;
	PlayerFriendedEvent: BindableEvent;
	PlayerUnfriendedEvent: BindableEvent;
	DevConsoleVisible: boolean;
	VRRotationIntensity: "Low" | "High" | "Smooth";
}

interface SettableCores {
	ChatActive: boolean;
	PointsNotificationsActive: boolean;
	BadgesNotificationsActive: boolean;
	ResetButtonCallback: boolean | BindableEvent;
	ChatMakeSystemMessage: MakeSystemMessageConfig;
	ChatWindowSize: UDim2;
	ChatWindowPosition: UDim2;
	ChatBarDisabled: boolean;
	SendNotification: SendNotificationConfig;
	TopbarEnabled: boolean;
	DevConsoleVisible: boolean;
	PromptSendFriendRequest: Player;
	PromptUnfriend: Player;
	PromptBlockPlayer: Player;
	PromptUnblockPlayer: Player;
	AvatarContextMenuEnabled: boolean;
	AddAvatarContextMenuOption: Enum.AvatarContextMenuOption | [string, BindableFunction];
	RemoveAvatarContextMenuOption: Enum.AvatarContextMenuOption | [string, BindableFunction];
	CoreGuiChatConnections:
		| { [name: string]: BindableEvent | BindableFunction }
		| Map<string, BindableEvent | BindableFunction>;
	VREnableControllerModels: boolean;
	VRLaserPointerMode: "Disabled" | "Pointer" | "Navigation" | "Hidden";
}

// type
interface CheckablePrimitives {
	nil: undefined;
	boolean: boolean;
	string: string;
	number: number;
	table: object;
	userdata: unknown;
	function: Callback;
	thread: thread;
	vector: Vector3;
	buffer: buffer;
}

/**
 * Returns the type of its only argument, coded as a string.
 * Roblox datatypes will return "userdata" when passed to this function. You should use Roblox's `typeOf()` function if you want to differentiate between Roblox datatypes.
 */
declare function type(value: unknown): keyof CheckablePrimitives;

/** The strings which can be returned by typeOf and their corresponding types */
interface CheckableTypes extends CheckablePrimitives {
	Axes: Axes;
	BrickColor: BrickColor;
	CFrame: CFrame;
	Color3: Color3;
	ColorSequence: ColorSequence;
	ColorSequenceKeypoint: ColorSequenceKeypoint;
	DateTime: DateTime;
	DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo;
	Enum: Enum;
	EnumItem: EnumItem;
	Enums: Enums;
	Faces: Faces;
	FloatCurveKey: FloatCurveKey;
	Font: Font;
	Instance: Instance;
	NumberRange: NumberRange;
	NumberSequence: NumberSequence;
	NumberSequenceKeypoint: NumberSequenceKeypoint;
	OverlapParams: OverlapParams;
	PathWaypoint: PathWaypoint;
	PhysicalProperties: PhysicalProperties;
	Random: Random;
	Ray: Ray;
	RaycastParams: RaycastParams;
	RaycastResult: RaycastResult;
	RBXScriptConnection: RBXScriptConnection;
	RBXScriptSignal: RBXScriptSignal;
	Rect: Rect;
	Region3: Region3;
	Region3int16: Region3int16;
	TweenInfo: TweenInfo;
	UDim: UDim;
	UDim2: UDim2;
	Vector2: Vector2;
	Vector2int16: Vector2int16;
	Vector3: Vector3;
	Vector3int16: Vector3int16;
}

type AttributeValue =
	| string
	| boolean
	| number
	| UDim
	| UDim2
	| BrickColor
	| Color3
	| Vector2
	| Vector3
	| CFrame
	| NumberSequence
	| ColorSequence
	| NumberRange
	| Rect
	| Font;

declare const enum RobloxEmoji {
	Robux = "",
	Premium = "",
	Verified = "",
}

interface BanAsyncConfig {
	/**
	 * (Required) UserID of the players to be banned.
	 *
	 * Max size is `50`. */
	UserIds: Array<number>;
	/**
	 * (Required) Duration of the ban in seconds. Permanent bans should have a value of `-1`.
	 *
	 * Zero and all other negative values are invalid.
	 */
	Duration: number;
	/**
	 * (Required) The message that will be displayed to users when they attempt to and fail to join an experience. Max size is 400.
	 */
	DisplayReason: string;
	/**
	 * (Required) Any internal messaging that will be returned when querying the user's ban history. Max size is 1000.
	 */
	PrivateReason: string;
	/**
	 * (Optional, default is `true`) Propagates the ban to all places within this universe.
	 */
	ApplyToUniverse?: boolean;
	/**
	 * (Optional, default is `false`) When `true`, Roblox does not attempt to ban alt accounts.
	 */
	ExcludeAltAccounts?: boolean;
}

interface UnbanAsyncConfig {
	/**
	 * (Required) UserIDs to be force allowed into the experience(s).
	 *
	 * Max size is `50`.
	 */
	UserIds: Array<number>;
	/**
	 * (Optional, default is `true`) Propagates the unban to all places within this universe.
	 */
	ApplyToUniverse?: boolean;
}

/**
 * Keys are expected to be unique numbers greater than or equal to 0, while values are expected to be numbers between 0 and 1 (inclusive). Tables containing up to 400 key-value pairs are supported.
 */
type DistanceAttenuationCurve = { [key: number]: number } | Map<number, number>;

interface CalculateConstraintsToPreserveConfig {
	/**
	 * The distance tolerance, in regards to `Attachment` preservation, between the attachment and the closest point on the original part's surface versus the closest point on the resulting part's surface. If the resulting distance following the solid modeling operation is greater than this value, the `Parent` of attachments and their associated constraints will be `nil` in the returned recommendation table.
	 */
	tolerance?: number;
	/**
	 * A `Enum.WeldConstraintPreserve` enum value describing how `WeldConstraints` are preserved in the resulting recommendation table.
	 */
	weldConstraintPreserve?: Enum.WeldConstraintPreserve;
}

interface GeometryServiceAsyncMethodConfig {
	/**
	 * The value of `CollisionFidelity` in the resulting parts.
	 */
	CollisionFidelity?: Enum.CollisionFidelity;
	/**
	 * The value of `FluidFidelity` in the resulting parts.
	 */
	RenderFidelity?: Enum.RenderFidelity;
	/**
	 * The value of FluidFidelity in the resulting parts.
	 */
	FluidFidelity?: Enum.FluidFidelity;
	/**
	 * Boolean controlling whether the objects should all be kept together or properly split apart. Default is `true` (split).
	 */
	SplitApart?: boolean;
}

interface VoxelChannels {
	/**
	 * The `Enum.Material` material of the voxel. Note that `Water` is not supported anymore; instead, a voxel that contains only water should be entered as `SolidMaterial = Enum.Material.Air, LiquidOccupancy = x`, where `x` is a number between 0 (exclusive) and 1 (inclusive).
	 */
	SolidMaterial: Enum.Material;
	/**
	 * The occupancy of the voxel's material as specified in the `SolidMaterial` channel. This should be a value between 0 (empty) and 1 (full).
	 */
	SolidOccupancy: number;
	/**
	 * Specifies the occupancy of the `Water` material in a voxel as a value between 0 (no water) and 1 (full of water). If the `SolidOccupancy` is 1 and the `SolidMaterial` is not `Air`, this will be 0.
	 */
	LiquidOccupancy: number;
}

interface SubscriptionInfo {
	/**
	 * The name of the subscription product.
	 */
	Name: string;
	/**
	 * The description of the subscription product.
	 */
	Description: string;
	/**
	 * The asset ID of the subscription product icon.
	 */
	IconImageAssetID: number;
	/**
	 * The duration of the subscription (for example, `Month`, `Year`, etc.).
	 */
	SubscriptionPeriod: Enum.SubscriptionPeriod;
	/**
	 * Localized price with the appropriate currency symbol for display (for example, `$4.99`). For users in unsupported countries, `DisplayPrice` returns a string without specific price information.
	 */
	DisplayPrice: string;
	/**
	 * Localized subscription period text for display (for example, `/month`). Can be used together with `DisplayPrice`.
	 */
	DisplaySubscriptionPeriod: number;
	/**
	 * Name of the subscription benefit provider (for example, the name of the associated experience).
	 */
	SubscriptionProviderName: string;
	/**
	 * True if the subscription product is available for sale.
	 */
	IsForSale: boolean;
	/**
	 * A number that can be used to compare the price of different subscription products. This is not the actual price of the subscription (for example, 499).
	 */
	PriceTier: number;
}

interface UserSubscriptionDetails {
	/**
	 * Current state of this particular subscription.
	 */
	SubscriptionState: Enum.SubscriptionState;
	/**
	 * Renewal time for this current subscription. May be in the past if the subscription is in [SubscribedRenewalPaymentPending](https://create.roblox.com/docs/reference/engine/enums/SubscriptionState#SubscribedRenewalPaymentPending) state. This field is will be `nil` if the subscription will not renew, is [Expired](https://create.roblox.com/docs/reference/engine/enums/SubscriptionState#Expired), or the user never subscribed.
	 */
	NextRenewTime: DateTime | undefined;
	/**
	 * When this subscription expires. This field will be nil if the subscription is not cancelled or the user never subscribed.
	 */
	ExpireTime: DateTime | undefined;
	/**
	 * Table containing the details of the subscription expiration. This field will be `nil` if the subscription is not in the [Expired](https://create.roblox.com/docs/reference/engine/enums/SubscriptionState#Expired) state. If populated, the table contains a ExpirationReason key of type [Enum.SubscriptionExpirationReason](https://create.roblox.com/docs/reference/engine/enums/SubscriptionExpirationReason) describing why the subscription is expired.
	 */
	ExpirationDetails: ExpirationDetails | undefined;
}

interface UserSubscriptionPaymentHistory {
	/**
	 * [DateTime](https://create.roblox.com/docs/reference/engine/datatypes/DateTime) at the start of this particular subscription period.
	 */
	CycleStartTime: DateTime;
	/**
	 * [DateTime](https://create.roblox.com/docs/reference/engine/datatypes/DateTime) at the end of this particular subscription period.
	 */
	CycleEndTime: DateTime;
	/**
	 * [Enum.SubscriptionPaymentStatus.Paid](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPaymentStatus#Paid) if the user paid for this particular subscription period. [Enum.SubscriptionPaymentStatus.Refunded](https://create.roblox.com/docs/reference/engine/enums/SubscriptionPaymentStatus#Refunded) if the user refunded this particular subscription period.
	 */
	PaymentStatus: Enum.SubscriptionPaymentStatus;
}

interface UserSubscriptionStatus {
	/**
	 * True if the user's subscription is active.
	 */
	IsSubscribed: boolean;
	/**
	 * True if the user is set to renew this subscription after the current subscription period ends.
	 */
	IsRenewing: boolean;
}

interface ExpirationDetails {
	ExpirationReason: Enum.SubscriptionExpirationReason;
}

interface PromptBulkPurchaseItem {
	Id: string;
	Type: Enum.MarketplaceProductType;
}

interface PromptBulkPurchaseFinishedResults {
	RobuxSpent: number;
	Items: Array<{
		type: Enum.MarketplaceProductType;
		id: string;
		status: Enum.MarketplaceItemPurchaseStatus;
	}>;
}

interface DrawImageTransformedOptions {
	/**
	 * Specifies how the pixels of the source image blend with those of the destination.
	 * Default is `Enum.ImageCombineType.AlphaBlend`.
	 */
	CombineType: Enum.ImageCombineType.AlphaBlend;
	/**
	 * Specifies the sampling method (e.g. Default for bilinear or `Pixelated` for nearest neighbor)
	 * Default is `Enum.ResamplerMode.Default`.
	 */
	SamplingMode: Enum.ResamplerMode.Default;
	/**
	 * Specifies the pivot point within the source image for scaling and rotation.
	 * Default is the center of the source image (i.e. `Image.Size / 2`).
	 */
	PivotPoint: Vector2;
}

interface DrawImageProjectedProjection {
	/** Direction (`Vector3`) where the projector is facing. */
	Direction: Vector3;
	/** Position (`Vector3`) as the position in local space with respect to the mesh. */
	Position: Vector3;
	/** Size (`Vector3`) as the size of the projector. */
	Size: Vector3;
	/** Up (`Vector3`) as the up vector of the projector in local space with respect to the mesh. */
	Up: Vector3;
}

interface DrawImageProjectedBrushConfig {
	/** AlphaBlendType (`Enum.ImageAlphaType`) which determines how this projection will blend alpha values. */
	AlphaBlendType: Enum.ImageAlphaType;
	/** ColorBlendType (`Enum.ImageCombineType`) which determines how this projection will blend color values. */
	ColorBlendType: Enum.ImageCombineType;
	/** Decal (`EditableImage`) as the image used for projection. */
	Decal: EditableImage;
	/** FadeAngle (`number`) as the angle in degrees for the projection edges to fall off. */
	FadeAngle: number;
	/** BlendIntensity (`number`) as the value between 0 and 1 which controls how much of the projection is blended into the resulting image. */
	BlendIntensity: number;
}

interface CreateMeshPartAsyncOptions {
	/** The value of `CollisionFidelity` in the resulting part. Defaults to `Enum.CollisionFidelity.Default` if the option is absent or the `options` table is `nil`. */
	CollisionFidelity?: Enum.CollisionFidelity;
	/** The value of `RenderFidelity` in the resulting part. Defaults to `Enum.RenderFidelity.Automatic` if the option is absent or the `options` table is `nil`. */
	RenderFidelity?: Enum.RenderFidelity;
	/** The value of `FluidFidelity` in the resulting part. Defaults to `Enum.FluidFidelity.Automatic` if the option is absent or the `options` table is `nil`. */
	FluidFidelity?: Enum.FluidFidelity;
}