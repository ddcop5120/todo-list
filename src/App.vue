<template>
  <v-app>
    <v-app-bar
      absolute
      color="#4A84F1"
      dark
      app
      scroll-target="#scrolling-techniques-8"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>待辦事項</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on"> mdi-cog</v-icon>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="./assets/belstar.png" alt="" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Belstar</v-list-item-title>
                  <v-list-item-subtitle>百星數位</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    :class="fav ? 'red--text' : ''"
                    icon
                    @click="fav = !fav"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="message" color="#4A84F1"></v-switch>
                </v-list-item-action>
                <v-list-item-title>Enable messages</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="hints" color="#4A84F1"></v-switch>
                </v-list-item-action>
                <v-list-item-title>Enable hints</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text @click="menu = false"> 取消 </v-btn>
              <v-btn color="primary" text @click="menu = false"> 儲存 </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-row class="flex-column" align="center">
        <v-col cols="6" class="mt-5">
          <v-avatar size="50" class="grey lighten-2">
            <img src="./assets/belstar.png" />
          </v-avatar>
          <div class="subtitle-2" style="margin: 10px 0 10px 0">Belstar</div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="$router.push({ name: 'All' })">
            <v-list-item-icon>
              <v-icon>mdi-format-list-checkbox</v-icon>
            </v-list-item-icon>
            <v-list-item-title>全部</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Finished' })">
            <v-list-item-icon>
              <v-icon>mdi-check-bold</v-icon>
            </v-list-item-icon>
            <v-list-item-title>已完成</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Undone' })">
            <v-list-item-icon>
              <v-icon>mdi-select-remove</v-icon>
            </v-list-item-icon>
            <v-list-item-title>未完成</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
